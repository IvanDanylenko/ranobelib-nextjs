import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    label: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 10,
    },
    labelTop: {
      top: 0,
    },
    labelBottom: {
      bottom: 0,
    },
  }),
);
