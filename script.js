
//********************関数宣言
// function 関数名(引数) {
//   処理
// }
// 関数名(引数);

//例----------------------------
function bts01() {
  console.log('関数宣言↓↓↓↓');
  console.log('私の推しは');
  console.log('ジョングクです');
}
bts01();

//********************無名関数、匿名関数、関数式、関数リテラル
// const 変数 = function () {
//   処理
// }
// 変数();

//例----------------------------
const bts02 = function () {
  console.log('無名関数↓↓↓↓');
  console.log('私の推しは');
  console.log('ジョングクです');
}
bts02();

//********************アロー関数
// const 変数 = () => {
//   処理
// }
// 変数();

// //処理が1行の場合は
// const 変数 = () => { 処理 }


//例----------------------------
const bts03 = () => {
  console.log('アロー関数↓↓↓↓');
  console.log('私の推しは');
  console.log('ジョングクです');
}
bts03();
//例(簡単に)----------------------------
const bts04 = () => { console.log('アロー関数 簡素化↓↓↓↓'); console.log('私の推しは'); console.log('ジョングクです'); }
//例(もっと簡単に)----------------------------
const bts05 = () => console.log('アロー関数 簡素化↓↓↓↓'); console.log('私の推しは'); console.log('ジョングクです');
