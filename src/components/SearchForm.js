import React from 'react';
import './sass/form.scss';
import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isinputted: false,
      isfetched: false,
      db_json: ''
    };
  }

  fetchResponse = () => {
    fetch('http://localhost:3001/concert_details')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        isfetched: true,
        db_json: res
      });

    })
  };

  validation = () => {
    if (!this.state.isinputted){
      this.setState(prevState => ({isinputted: true}));
    }
    else{
      this.setState(prevState => ({isinputted: false}));
    }
    console.log(this.state.isfetched);
  };

  search = () => {
    alert(document.getElementById("form1").elements['artist'].value);
  };

  componentDidMount = () => {
    this.fetchResponse();
  };

  render() {
    const loading = [{ value: 'loading', lavel: 'loading' }];
    let options;
    if (this.state.isfetched) {
      options = this.state.db_json.map(v => JSON.parse(JSON.stringify({ value: v.artist, label: v.artist })));
    }

    return (
        <div id="form">
          <form id="form1">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.isfetched ? options : loading}
            getOptionLabel={this.state.isfetched ? options => options.label : loading => loading.label}
            style={{ width: 300 }}
            onChange={this.validation}
            renderInput={params => (
              <TextField {...params}
                label="アーティスト名"
                id="standard-basic"
                name="artist"
                required
                fullWidth
              />
            )}
          />
            <Button
              variant="contained"
              color="primary"
              onClick={this.search}
              className={this.state.isinputted ? "" : "submit-disabled"}
              >
              ライブ日程を検索する
            </Button>
          </form>
        </div>
    );
  }
}

export default SearchForm;
