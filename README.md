## 概要
WEBテスト課題
新大阪駅〜東京駅の新幹線料金を年齢別に出力する機能（料金は仮定）  
以下は、予習動画を元に自分なりに当てはめたものになります  
## 進め方
[1] プログラム実行環境を用意  
　言語は慣れたものを使用して良いとのことで、最近学習した内容のアウトプットを兼ねてReactで作成  
[2] 関数を定義し関数を呼び出す形をファイルに記載する
- まずは、簡単に見た目の部分を作成し、表示を確認
- 処理内容はまだ書かずに、ボタンを押したらイベントハンドラが反応し、コンソールに「hello world」と出力するようにして確認  

[3] 処理を記載して実行する  
　今回は年齢別の料金が知ることができれば良いので、条件分岐(switch文かif文)を使用して行く

## コードの基礎
- コードを実行できる状態を用意する  
　localで```npx create-react-app train-fare-for-apprentice　```として環境構築し、一度立ち上げて、問題ないことを確認  
- インターフェイスだけ先に定義する  
　不要なファイルの削除  
　不要なコードの削除  
　見た目の作成  
　関数handleTrainFareを作成、中身はconsole.log('hello world')として確認  
- 小さく作って動作確認  
　途中にコンソールに出力するような記述をしたり、立ち上げたりして確認  

## STEP  
- ロジックを考える
- 処理を日本語コメントで順に記載
![image](https://user-images.githubusercontent.com/88694354/225860139-ab33d0ff-65f5-424c-b267-f98e004e6a78.png)
- 日本語コメントを一つずつコードに置き換える

年齢を入力させる
```
<form>
  <label htmlFor='age'>年齢</label>
  <input name='age' type='number' />
  <button>回答する</button>
 </form>
```
 年齢(age)を取得する・保持する
```
 const [age, setAge] = useState(0);
 const handleChangeAge = (e) => {
  setAge(e.target.value)
 };
 <input name='age' type='number' onChange={handleChangeAge} />
```
ageをもとに料金を処理する関数handleTrainFareを定義する
```
 const handleTrainFare = () => {
 };
```
fareも保持できるようにしておく
``` 
 const [fare, setFare] = useState(0);
```
今回の条件に合わせて処理する（switch文）を使用
``` 
 switch(true){
  case(age < 6):
    setFare(0);
    break;
  case(age >= 6 && age < 12):
    setFare(5000);
    break;
  default:
    setFare(10000);
    break;
  };
```
fareを出力する
``` 
  <h3>あなたの新幹線の料金は{fare}円です！</h3>
```
  
- 要件を満たす状態にする  
App.js
```
import { useState } from 'react';

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
    
 return(
    <div>
      <header>
        <h1>あなたの新幹線料金</h1>
       </header>
       <div>
        <form onSubmit={handleTrainFare} >
          <label htmlFor='age'>年齢</label>
          <input name='age' type='nubmer' placeholder='ご年齢を入力してください' onChange={handleChangeAge} />
          <button type='submit'>回答する</button>
        </form>
       </div>
       <div>
        <h3>あなたの新幹線の料金は{fare}円です！</h3>
       </div>
  );
};

export default App;
```

## チェックポイント
- [x] コードを実行可能な状態にしているか
- [x] インターフェイスを最初に記載しているか
- [x] 日本語のロジックは細かく記載しているか
- [x] 具体的かつ単純なケースで考えているか
- [x] コードを１行書く毎に実行して挙動確認しているか

