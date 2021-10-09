import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    lineClamp: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
    title: {
      fontSize: theme.typography.pxToRem(13),
    },
  }),
);
