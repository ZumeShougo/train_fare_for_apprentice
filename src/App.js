import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);//年齢を保持する
  const [fare, setFare] = useState(0);//料金を保持する
  const handleChangeAge = (e) => {//年齢の入力値が変化したら年齢を更新させる
    console.log(e.target.value);//コンソールで変わったか確認しておく
    setAge(e.target.value);//入力値を元に年齢を更新する
  };
  const handleTrainFare = (e) => {//回答ボタンが押されたら処理を開始する
    e.preventDefault();//デフォルトの処理をオミットさせる
    switch(true){//switch文を使う
      case(age < 6)://6歳未満の処理
        setFare(0);//料金を0円に更新する
        break;
      case(age >= 6 && age < 12)://6歳以上12歳未満の場合の処理
        setFare(5000);//料金を5000円に更新する
        break;
      default://6歳未満でも6歳以上12歳未満でもない場合＝12歳以上の場合
        setFare(10000);//料金を10000円に更新する
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>あなたの新幹線の料金</h1>
        <p>新大阪駅から東京駅間の新幹線の料金を調べますのでご年齢を入力してください</p>
      </header>
      <div>
        <form onSubmit={handleTrainFare} >
          <label>年齢</label>
          <input name='age' type='number' placeholder='年齢を入力してください' onChange={handleChangeAge}/>
          <button type='submit'>回　答</button>
        </form>
      </div>
      <div>
        <h3>あなたの新幹線の料金は{fare}円です！</h3>
      </div>
    </div>
  );
}

export default App;
