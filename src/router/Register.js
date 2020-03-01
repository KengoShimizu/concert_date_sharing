import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

function Register() {
  return (
    <div className="Register">
      <Typography>
        あなたの好きなアーティストのライブ情報を登録してみんなで共有してみよう！
      </Typography>
      <br />

      <Typography
        color="textSecondary"
        >
        *必須
      </Typography>
      <br />

      <Form />
      <br />

      <Typography>
        みんなが登録したライブ情報を検索してみよう！
      </Typography>

      <Link to="/" style={{textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          >
          ライブ情報を検索する
        </Button>
      </Link>
      <br />
      <br />

    </div>
  );
}

export default Register;
