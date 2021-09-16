import { Container, makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import postApi from '../../../api/postApi';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import PostList from '../components/postList';

Home.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},

  heading: {
    margin: '48px 0',
    marginBottom: 8,
    textAlign: 'center',
  },

  Pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,

    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Home(props) {
  const classes = useStyles();
  const history = useHistory();

  const [postList, setPostList] = useState([]);
  // const urlParam = new URLSearchParams(window.location.search);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 6,
    __totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 6,
    _page: 1,
  });

  const { _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const handleChange = (event, value) => {
    setFilter({
      _limit: _limit,
      _page: value,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await postApi.getAll(filter);

        setPostList(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }
    })();
  }, [filter]);

  const handleOnRemove = async (id) => {
    console.log(id);
    const message = `Are you sure to remove "${id}"?`;
    if (window.confirm(message)) {
      try {
        await postApi.remove(id);

        // newLiElement.remove();
        window.location.reload();
      } catch (error) {
        console.log('Failed to remove post:', error);
      }
    }
  };

  const handleOnClick = () => {
    history.push('/home/add');
  };

  return (
    <div className={classes.root}>
      <Header
        icon={<i class="fas fa-plus-circle"></i>}
        title="Add new post"
        onClick={handleOnClick}
      />

      <Banner />

      <Container>
        <Typography variant="h3" component="h1" className={classes.heading}>
          Latest posts
        </Typography>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48,
          }}
        >
          <div style={{ height: 4, width: 80, backgroundColor: 'black' }} />
        </div>

        <PostList postList={postList} onRemove={handleOnRemove} />
      </Container>

      <div className={classes.Pagination}>
        <Typography>Page: {filter._page}</Typography>
        <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={handleChange} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;

//utils.formatDate(post.updatedAt)
