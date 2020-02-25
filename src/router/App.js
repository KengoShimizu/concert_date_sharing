import React from 'react';
import '../App.scss';
import Form from '../components/Form';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="description">こーこーこーゆーサイトです．</div>

      <Form />
      <Link to="/search">
        <Button
          variant="contained"
          color="primary"
          >
          ライブ情報を検索する
        </Button>
      </Link>

    </div>
  );
}

export default App;
