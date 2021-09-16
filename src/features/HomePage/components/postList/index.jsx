import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Delete, Edit } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import AppConstants from '../../../../constants/AppConstant';
import utils from '../../../../utils/utils';

PostList.propTypes = {
  postList: PropTypes.array,
  onRemove: PropTypes.func,
};

PostList.defaultProps = {
  postList: PropTypes.array,
  onRemove: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 -8px',
  },

  rootItem: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '33.3333%',
    },

    padding: 8,
  },

  card: {
    position: 'relative',
    maxWidth: '100%',
    border: '1px solid rgba(0,0,0,.125)',

    '&:hover': {
      border: 0,
      boxShadow: '0px 5px 10px 0px rgba(0,0,0,.125)',

      '& button': {
        display: 'flex',
      },
    },
  },

  media: {
    height: 200,
    cursor: 'pointer',

    '& img': {
      width: '100%',
      height: 200,
    },
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  header: {
    //
  },

  content: {
    padding: 16,
  },

  title: {
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',

    marginBottom: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  desc: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',

    marginBottom: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  editBtn: {
    position: 'absolute',
    top: 16,
    right: 16,

    display: 'none',
    color: 'white',
    backgroundColor: '#444',
    opacity: '0.7',

    '&:hover': {
      opacity: 1,
      backgroundColor: '#444',
    },
  },

  deleteBtn: {
    position: 'absolute',
    top: 72,
    right: 16,

    display: 'none',
    color: 'white',
    backgroundColor: '#444',
    opacity: '0.7',

    '&:hover': {
      opacity: 1,
      backgroundColor: '#444',
    },
  },
}));

function PostList(props) {
  const classes = useStyles();
  const { postList, onRemove } = props;

  const match = useRouteMatch();
  console.log('path: ', match.path);

  const history = useHistory();
  const imgRef = useRef(null);

  return (
    <div className={classes.root}>
      {postList.map((post) => (
        <div className={classes.rootItem}>
          <div className={classes.card}>
            <div
              className={classes.media}
              onClick={() => {
                history.push(`${match.path}/detail-page?id=${post.id}`);
              }}
            >
              <img
                onError={(e) => {
                  e.target.src = AppConstants.DEFAULT_IMAGE_URL;
                }}
                src={post.imageUrl}
                alt={post.imageUrl}
              />
            </div>

            <div className={classes.content}>
              <Typography
                variant="h5"
                color="textSecondary"
                component="h2"
                className={classes.title}
              >
                {post.title}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                {post.description}
              </Typography>

              <Typography variant="body1" component="p">
                By <strong>{post.author}</strong> -{' '}
                <small>{utils.formatDate(post.updatedAt)}</small>
              </Typography>
            </div>

            <IconButton
              className={classes.editBtn}
              onClick={() => {
                history.push(`${match.path}/edit?id=${post.id}`);
              }}
            >
              <Edit />
            </IconButton>

            <IconButton
              className={classes.deleteBtn}
              color="inherit"
              onClick={() => {
                onRemove && onRemove(post.id);
              }}
            >
              <Delete />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
