import React from 'react';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Search() {
  return (
    <div className="Search">
      <div className="description">検索してみてー</div>

      <SearchForm />
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          >
          トップに戻る
        </Button>
      </Link>

    </div>
  );
}

export default Search;
