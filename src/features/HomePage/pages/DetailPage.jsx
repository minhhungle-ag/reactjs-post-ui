import {
  Box,
  Button,
  Container,
  DialogActions,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import postApi from '../../../api/postApi';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import utils from '../../../utils/utils';
// import Dialog from '@material-ui/core/Dialog';

// import PropTypes from "prop-types";

DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    //
  },

  banner: {
    height: 300,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    width: '100%',

    '& img': {
      with: '100%',
      height: '100%',
    },
  },

  content: {
    marginTop: '-4rem',
    backgroundColor: 'white',
    padding: ' 2rem',
    borderRadius: 4,

    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',

    '& img': {
      width: '100%',
    },
  },

  title: {
    marginBottom: 8,
  },

  author: {
    //
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const urlParam = new URLSearchParams(window.location.search);
  const postId = urlParam.get('id');
  const history = useHistory();

  const [post, setPost] = useState({});
  const [firstImgOpen, setFirstImgOpen] = useState(false);
  const [secondImgOpen, setSecondImgOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await postApi.get(postId);
      setPost(data);
    })();
  }, [postId]);

  const handleFirstImgClickOpen = () => {
    setFirstImgOpen(true);
  };
  const handleFirstImgClose = () => {
    setFirstImgOpen(false);
  };

  const handleSecondImgClickOpen = () => {
    setSecondImgOpen(true);
  };
  const handleSecondImgClose = () => {
    setSecondImgOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header
        icon={<i className="fas fa-edit"></i>}
        title="Edit post"
        onClick={() => history.push(`/home/edit?id=${postId}`)}
      />

      <Box className={classes.banner} style={{ backgroundImage: `url(${post.imageUrl})` }}></Box>

      <Container>
        <Box className={classes.content}>
          <Typography variant="h5" component="h5" className={classes.title}>
            {post.title}
          </Typography>

          <Typography variant="body1" component="p" className={classes.author}>
            by <strong> {post.author}</strong> <small>{utils.formatDate(post.updatedAt)}</small>
          </Typography>

          <Divider style={{ margin: '16px 0' }} />

          <Typography variant="body1" component="p" className={classes.desc}>
            {post.description}
          </Typography>

          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            {post.description}
          </Typography>

          <br />

          <Box onClick={handleFirstImgClickOpen}>
            <img
              style={{ cursor: 'pointer' }}
              class="post-image"
              src="https://picsum.photos/1368/800"
              alt="Picsum photos"
            />
          </Box>

          <Dialog
            onClose={handleFirstImgClose}
            aria-labelledby="customized-dialog-title"
            maxWidth="lg"
            open={firstImgOpen}
          >
            <dialogActionsClasses>
              <Button onClick={handleFirstImgClose} color="primary">
                <Close />
              </Button>
            </dialogActionsClasses>

            <img class="post-image" src="https://picsum.photos/1368/800" alt="Picsum photos" />
          </Dialog>

          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>

          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>

          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>

          <br />

          <Box onClick={handleSecondImgClickOpen}>
            <img
              style={{ cursor: 'pointer' }}
              class="post-image"
              src="https://picsum.photos/1368/1000"
              alt="Picsum photos"
            />
          </Box>

          <Dialog
            onClose={handleSecondImgClose}
            aria-labelledby="customized-dialog-title"
            maxWidth="lg"
            open={secondImgOpen}
          >
            <DialogActions>
              <Button onClick={handleSecondImgClose} color="primary">
                <Close />
              </Button>
            </DialogActions>

            <img class="post-image" src="https://picsum.photos/1368/800" alt="Picsum photos" />
          </Dialog>
          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>
          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>
          <br />

          <Typography variant="body1" component="p" className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus, ratione quia
            necessitatibus impedit porro officiis nulla sed ex iusto et labore soluta praesentium
            molestias ipsum quae! Voluptas eum possimus harum aspernatur voluptatibus corporis
            obcaecati perferendis vel quae at dolor sed minima officia, facilis nesciunt temporibus.
            Quo recusandae cupiditate ad!
          </Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default DetailPage;
