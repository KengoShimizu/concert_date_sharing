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
        検索がヒットしなかったら登録してみてね！
      </Typography>
      <Typography
        color="textSecondary"
        >
        *必須
      </Typography><br />
      <SearchForm />
      <Link to="/register">
        <Button
          variant="contained"
          color="secondary"
          >
          ライブ情報を登録する
        </Button>
      </Link>

    </div>
  );
}

export default Search;
