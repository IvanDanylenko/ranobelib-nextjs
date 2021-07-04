import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbarPlaceholder: {
    marginBottom: theme.spacing(2),
    ...theme.mixins.toolbar,
  },
}));
