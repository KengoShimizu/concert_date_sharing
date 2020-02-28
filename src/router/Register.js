import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Register() {
  return (
    <div className="Register">
      <Form />
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          >
          ライブ情報を検索する
        </Button>
      </Link>

    </div>
  );
}

export default Register;
