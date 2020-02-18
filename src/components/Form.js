import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Autocomplete } from '@material-ui/lab';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      concerts: [],
      todohukens: [],
      kaijos: [],
      inputs: [],
      selectedDates: []
    };
  }

  // dateがpickされたときに実行される関数
  handleDateChange = date => {
    // 日付+indexの文字列になっているため，分割する
    const index = date[date.length-1];
    const date_ = date.substring( 0, date.length-1 );

    // stateの配列を更新するためコピー先の配列全体を変更する
    const selectedDates_copy = this.state.selectedDates.slice();
    selectedDates_copy[index] = date_;
    this.setState({ selectedDates: selectedDates_copy });
  };

  handleChange_concert = e => {
    const index = e.target.id.split(' ')[0].replace('index', '');

    // stateの配列を更新するためコピー先の配列全体を変更する
    const concerts_copy = this.state.concerts.slice();
    concerts_copy[index] = e.target.value;
    this.setState({ concerts: concerts_copy });
  }

  handleChange_todohuken = e => {
    // 都道府県プルダウン操作した時
    let index;
    if (e.target.id){
      index = e.target.id.split(' ')[0].replace('index', '');
    }
    // 右のxボタンで都道府県名を消した場合
    else{
      index = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('input').id.split(' ')[0].replace('index', '');
    }
    const str = e.target.innerHTML[0] == '<' ? '' : e.target.innerHTML;

    // stateの配列を更新するためコピー先の配列全体を変更する
    const todohukens_copy = this.state.todohukens.slice();
    todohukens_copy[index] = str;
    this.setState({ todohukens: todohukens_copy });
  }

  handleChange_kaijo = e => {
    const index = e.target.id.split(' ')[0].replace('index', '');

    // stateの配列を更新するためコピー先の配列全体を変更する
    const kaijos_copy = this.state.kaijos.slice();
    kaijos_copy[index] = e.target.value;
    this.setState({ kaijos: kaijos_copy });
  }

  // 「公演情報を追加する」ボタンが押された時に実行される関数
  append_details = () => {
    const artist_isinputted = this.state.artist;
    const newInput = this.state.inputs.length;
    // アーティスト名が入力されているか
    if (artist_isinputted){
      if (newInput == 0){
        this.setState(prevState => ({
          inputs: prevState.inputs.concat([newInput]),
          concerts: prevState.concerts.concat(['']),
          todohukens: prevState.todohukens.concat(['']),
          kaijos: prevState.kaijos.concat(['']),
          selectedDates: prevState.selectedDates.concat([new Date()])
        }));
      }
      else{
        // 全ての情報が記入されていたら公演情報追加を許す
        if(this.state.concerts.indexOf('') == -1 && this.state.todohukens.indexOf('') == -1 && this.state.kaijos.indexOf('') == -1){
          this.setState(prevState => ({
            inputs: prevState.inputs.concat([newInput]),
            concerts: prevState.concerts.concat(['']),
            todohukens: prevState.todohukens.concat(['']),
            kaijos: prevState.kaijos.concat(['']),
            selectedDates: prevState.selectedDates.concat([new Date()])
          }));
        }
        else{
          // requiredを誘発するためsubmit()ではなくclick()
          document.getElementById('submit').click();
        }
      }
    }
    else{
      // requiredを誘発するためsubmit()ではなくclick()
      document.getElementById('submit').click();
    }
  };

  render() {

    return (
        <div id="form">
          <form>
            <TextField
              label="アーティスト名"
              id="standard-basic"
              value={this.state.artist}
              onChange={e => this.setState({ artist: e.target.value })}
              required
            />
            <br />

            {/* 公演情報を追加する」ボタンが押された時に順次追加*/}
            {this.state.inputs.map(input =>
              <div key={input}>
                <br />
                <Typography
                  variant="h6"
                  color="secondary"
                  gutterBottom>
                  公演情報{input+1}
                </Typography>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <InlineDatePicker
                    label="ライブ日程"
                    format="yyyy/MM/dd"
                    onChange={date => this.handleDateChange(date+input)}
                    value={this.state.selectedDates[input]}
                  />
                </MuiPickersUtilsProvider>
                <br />

                <TextField
                  label="ライブ名"
                  id={`index${input} standard-basic`}
                  onChange={this.handleChange_concert}
                  value={this.state.concerts[input]}
                  required
                />
                <br />

                <Autocomplete
                  id={`index${input} combo-box-demo`}
                  options={options}
                  getOptionLabel={option => option.label}
                  onChange={this.handleChange_todohuken}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params}
                      label="都道府県"
                      id="standard-basic"
                      required
                      fullWidth
                    />
                  )}
                />

                <TextField
                  label="会場名"
                  id={`index${input} standard-basic`}
                  onChange={this.handleChange_kaijo}
                  value={this.state.kaijos[input]}
                  required
                />
                <br />
              </div>)
            }

            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={this.append_details}>
              公演情報を追加する
            </Button>
            <br />
            <Button
              id="submit"
              variant="contained"
              color="primary"
              type="submit">
              登録する
            </Button>
          </form>
        </div>
    );
  }
}

const options = [
  { value:  "hokkaidou ほっかいどう",  label: "北海道" },
	{ value:  "aomori あおもり",  label: "青森県" },
	{ value:  "iwate いわて",  label: "岩手県" },
	{ value:  "miyagi みやぎ",  label: "宮城県" },
	{ value:  "akita あきた",  label: "秋田県" },
	{ value:  "yamagata やまがた",  label: "山形県" },
	{ value:  "hukusima ふくしま",  label: "福島県" },
	{ value:  "ibaraki いばらき",  label: "茨城県" },
	{ value:  "totigi とちぎ",  label: "栃木県" },
	{ value:  "gunnma ぐんま",  label: "群馬県" },
	{ value:  "saitama さいたま",  label: "埼玉県" },
	{ value:  "tiba ちば",  label: "千葉県" },
	{ value:  "toukyou とうきょう",  label: "東京都" },
	{ value:  "kanagawa かながわ",  label: "神奈川県" },
	{ value:  "niigata にいがた",  label: "新潟県" },
	{ value:  "toyama とやま",  label: "富山県" },
	{ value:  "isikawa いしかわ",  label: "石川県" },
	{ value:  "1hukui ふくい",  label: "福井県" },
	{ value:  "yamanasi やまなし",  label: "山梨県" },
	{ value:  "nagano ながの",  label: "長野県" },
	{ value:  "gihu ぎふ",  label: "岐阜県" },
	{ value:  "sizuoka しずおか",  label: "静岡県" },
	{ value:  "aiti あいち",  label: "愛知県" },
	{ value:  "mie みえ",  label: "三重県" },
	{ value:  "siga しが",  label: "滋賀県" },
	{ value:  "kyouto きょうと",  label: "京都府" },
	{ value:  "oosaka おおさか",  label: "大阪府" },
	{ value:  "hyougo ひょうご",  label: "兵庫県" },
	{ value:  "nara なら",  label: "奈良県" },
	{ value:  "wakayama わかやま",  label: "和歌山県" },
	{ value:  "tottori とっとり",  label: "鳥取県" },
	{ value:  "simane しまね",  label: "島根県" },
	{ value:  "okayama おかやま",  label: "岡山県" },
	{ value:  "hirosima ひろしま",  label: "広島県" },
	{ value:  "yamaguti やまぐち",  label: "山口県" },
	{ value:  "tokusima とくしま",  label: "徳島県" },
	{ value:  "kagawa かがわ",  label: "香川県" },
	{ value:  "ehime えひめ",  label: "愛媛県" },
	{ value:  "kouti こうち",  label: "高知県" },
	{ value:  "hukuoka ふくおか",  label: "福岡県" },
	{ value:  "saga さが",  label: "佐賀県" },
	{ value:  "nagasaki ながさき",  label: "長崎県" },
	{ value:  "kumamoto くまもと",  label: "熊本県" },
	{ value:  "ooita おおいた",  label: "大分県" },
	{ value:  "miyazaki みやざき",  label: "宮崎県" },
	{ value:  "kagosima かごしま",  label: "鹿児島県" },
	{ value:  "okinawa おきなわ",  label: "沖縄県" }
]

export default Form;
