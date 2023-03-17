import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>あなたの新幹線の料金</h1>
        <p>新大阪駅＜＝＞東京駅間の新幹線の料金を調べますのでご年齢を入力してください</p>
      </header>
      <div>
        <form>
          <label>年齢</label>
          <input type='number' placeholder='年齢を入力してください'/>
          <button>解　答</button>
        </form>
      </div>
      <div>
        <h3>あなたの新幹線の料金は{}円です</h3>
      </div>
    </div>
  );
}

export default App;
