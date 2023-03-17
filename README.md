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
　localでnpx create-react-app train-fare-for-apprentice　として環境構築し、一度立ち上げて、問題ないことを確認  
- インターフェイスだけ先に定義する  
　不要なファイルの削除  
　不要なコードの削除  
　見た目の作成  
　関数handleTrainFareを作成、中身はconsole.log('hello world')として確認  
- 小さく作って動作確認  
　途中にコンソールに出力するような記述をしたり、立ち上げたりして確認  

## STEP  
- ロジックを考える  
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9bAp6bFWlS7xXFfbwz6tbt%2F%25E7%2584%25A1%25E9%25A1%258C%3Fnode-id%3D0%253A1%26t%3DC6Exm56v0ykbh7Qz-1" allowfullscreen></iframe>
