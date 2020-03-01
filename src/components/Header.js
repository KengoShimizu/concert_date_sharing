import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme_ } from '../common_theme';

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <ThemeProvider theme={theme_}>
          <AppBar position="static" className={classes.appbar} color="primary">
            <Toolbar variant="dense">
              <Typography variant="h6">
                ライブ情報共有サイト
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <br />
      </div>
    );
  }
};

export default withStyles(styles)(Header);
