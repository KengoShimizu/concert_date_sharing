import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import Header from '../components/Header';

function AfterRegister() {
  return (
    <div className="Search">

    <Header title="登録完了"/>
    <br /><br />

      <div style={{width:'95%', margin:'0 auto'}}>

        <Typography variant="h5" align="center" color="error">登録が完了しました</Typography>
        <br /><br /><br /><br /><br />
        <Link to="/" style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            >
            トップに戻る
          </Button>
        </Link>

      </div>

    </div>
  );
}

export default AfterRegister;
