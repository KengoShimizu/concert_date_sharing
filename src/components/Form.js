import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from 'react-select'
import { Autocomplete } from '@material-ui/lab';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
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


  text_input = textValue => {
    //if ()
    this.setState({ artist: textValue });
  };

  // 「公演情報を追加する」ボタンが押された時に実行される関数
  append_details = () => {
    const newInput = this.state.inputs.length;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput]),
      selectedDates: prevState.selectedDates.concat([new Date()])
     }));
  };

  render() {

    return (
        <div id="form">
          <form>
            <TextField
              label="アーティスト名"
              id="standard-basic"
              value={this.state.artist}
              onChange={e => this.text_input(e.target.value)}
              required
            />
            <br />

            {/* 公演情報を追加する」ボタンが押された時に順次追加*/}
            {this.state.inputs.map(input =>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <InlineDatePicker
                    label="ライブ日程"
                    format="MM/dd/yyyy"
                    onChange={date => this.handleDateChange(date+input)}
                    value={this.state.selectedDates[input]}
                  />
                </MuiPickersUtilsProvider>
                <br />

                <TextField
                  label="ライブ名"
                  id="standard-basic"
                  required
                />
                <br />

                <Autocomplete
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel={option => option.label}
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
                  id="standard-basic"
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

/*
//アーティストを探すときにこれがあるといい
//データベースから読み込めたらいいね
<Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map(option => option.title)}
        renderInput={params => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" fullWidth />
        )}
      />

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];
*/

export default Form;
