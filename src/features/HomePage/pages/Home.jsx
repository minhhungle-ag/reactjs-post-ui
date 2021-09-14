import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import postApi from '../../../api/postApi';
import AppConstants from '../../../constants/AppConstant';
import PostList from '../components/postList';
import Pagination from '@material-ui/lab/Pagination';

Home.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '48px 0',
  },

  heading: {
    marginBottom: 48,
    textAlign: 'center',
  },

  Pagination: {
    display: 'flex',
    justifyContent: 'center',

    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Home(props) {
  const classes = useStyles();

  const [postList, setPostList] = useState([]);
  // const urlParam = new URLSearchParams(window.location.search);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 15,
  });

  const [page, setPage] = useState(1);

  const { _limit, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    (async () => {
      const params = {
        _page: page,
        _limit: _limit,
        _sort: 'updatedAt',
        _order: 'desc',
      };

      try {
        const response = await postApi.getAll(params);

        setPostList(response.data.data);
        setPagination(response.data.pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }
    })();
  }, [page]);

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

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3" component="h1" className={classes.heading}>
          Latest posts
        </Typography>

        <PostList postList={postList} onRemove={handleOnRemove} />
      </Container>

      <div className={classes.Pagination}>
        <Typography>Page: {page}</Typography>
        <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Home;

//utils.formatDate(post.updatedAt)
