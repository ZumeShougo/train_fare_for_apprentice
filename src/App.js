import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);//年齢を保持する
  const [fare, setFare] = useState();//料金を保持する
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>あなたの新幹線の料金</h1>
        <p className='mt-2 text-lg text-gray-600'>新大阪駅から東京駅間の新幹線の料金を調べますのでご年齢を入力してください</p>
      </header>
      <div className='mt-8'>
        <form onSubmit={handleTrainFare} >
          <label className='block mb-2 font-medium text-gray-800' htmlFor='age'>年齢</label>
          <input className='w-full px-3 py-2 mb-4 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline-blue' name='age' type='number' placeholder='ご年齢を入力してください' onChange={handleChangeAge}/>
          <button className='inline-block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue' type='submit'>回答する</button>
        </form>
      </div>
      {fare >= 0 && (
        <div className='mt-8'>
          <h3 className='text-2xl font-bold text-gray-800'>あなたの新幹線の料金は{fare}円です！</h3>
        </div>
      )}
    </div>
  );
}

export default App;
