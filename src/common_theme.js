import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { TableCell, TableRow } from '@material-ui/core';
//import { green } from '@material-ui/core/colors';

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export const theme_ = createMuiTheme({
  palette: {
    primary: {
      main: '#00e5ff',
    },
    secondary: {
      main: '#03a9f4',
    },
  },
});
