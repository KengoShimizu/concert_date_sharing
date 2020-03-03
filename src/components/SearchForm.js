import React from 'react';
import './sass/form.scss';
import { Button, TextField, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { StyledTableCell, StyledTableRow } from '../common_theme';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isinputted: false,
      isfetched: false,
      db_json: ''
    };
  }

  //DBアクセス・Json取得
  fetchResponse = () => {
    //fetch('http://localhost:3001/concert_details')
    fetch('https://concertapi.herokuapp.com/concert_details')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        isfetched: true,
        db_json: res
      });

    })
  };

  //アーティスト名入力欄のバリデーション
  validation = e => {
    if (e.target.value === 0){
      this.setState(prevState => ({isinputted: true}));
    }
    else{
      this.setState(prevState => ({isinputted: false}));
    }
  };

  //検索ボタンクリックイベント
  search = () => {
    const selected_json = this.state.db_json.filter(item => {
      if (item.artist === document.getElementById("form1").elements['artist'].value) return true;
    });
    this.setState({json: selected_json});
    //alert(document.getElementById("form1").elements['artist'].value);
  };

  //マウント後にDBアクセス
  componentDidMount = () => {
    this.fetchResponse();
  };

  render() {
    //プルダウンにアーティスト名を追加
    const loading = [{ value: 'loading', lavel: 'loading' }];
    let options;
    if (this.state.isfetched) {
      options = this.state.db_json.map(v => JSON.parse(JSON.stringify({ value: v.artist, label: v.artist })));
    }

    //検索後に取得してjsonの整形
    let detail_table = '';
    if (this.state.json) {
      let list = [];
      for (let i=0; i<this.state.json[0].dates.length; i++) {
        list.push(
          <div>
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" colSpan={2}>{this.state.json[0].concerts[i]}</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow key="">
                    <StyledTableCell component="th" scope="row" align="center">日程</StyledTableCell>
                    <StyledTableCell align="left">{this.state.json[0].dates[i].substr(0, 10)}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="">
                    <StyledTableCell component="th" scope="row" align="center">都道府県</StyledTableCell>
                    <StyledTableCell align="left">{this.state.json[0].todohukens[i]}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="">
                    <StyledTableCell component="th" scope="row" align="center">会場</StyledTableCell>
                    <StyledTableCell align="left">{this.state.json[0].kaijos[i]}</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      }

      detail_table = (<div>{list}</div>);

    }

    return (
        <div id="form">
          <form id="form1">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.isfetched ? options : loading}
            getOptionLabel={this.state.isfetched ? options => options.label : loading => loading.label}
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
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.search}
            className={this.state.isinputted ? "" : "submit-disabled"}
            fullWidth
            >
            ライブ日程を検索する
          </Button>
        </form>
        {detail_table}
      </div>
    );
  }
}

export default SearchForm;
