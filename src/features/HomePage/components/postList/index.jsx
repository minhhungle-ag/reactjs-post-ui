import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import utils from '../../../../utils/utils';
import { Box } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

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
    [theme.breakpoints.up('md')]: {
      width: '33.3333%',
    },

    padding: 8,
  },

  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },

  title: {
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  desc: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

function PostList(props) {
  const classes = useStyles();
  const { postList, onRemove } = props;

  return (
    <div className={classes.root}>
      {postList.map((post) => (
        <Box className={classes.rootItem}>
          <Card className={classes.card}>
            <CardHeader title={post.author} subheader={utils.formatDate(post.updatedAt)} />
            <CardMedia className={classes.media} image={post.imageUrl} title={post.imageUrl} />

            <CardContent>
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
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Edit />
              </IconButton>

              <IconButton
                aria-label="share"
                onClick={() => {
                  onRemove && onRemove(post.id);
                }}
              >
                <Delete />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default PostList;
