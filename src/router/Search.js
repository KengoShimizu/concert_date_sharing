import React from 'react';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

function Search() {
  return (
    <div className="Search">

      <Typography>
        本サービスはアーティストのライブ情報を共有することを目的としています<br />
        あなたの好きなアーティストのライブ情報を検索してみましょう！<br />
      </Typography>
      <br />

      <Typography
        color="textSecondary"
        >
        *必須
      </Typography>
      <br />

      <SearchForm />
      <br />

      <Typography>
        検索がヒットしなかったら登録してみてね！
      </Typography>

      <Link to="/register" style={{textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          >
          ライブ情報を登録する
        </Button>
      </Link>
      <br />
      <br />

    </div>
  );
}

export default Search;
