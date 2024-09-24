
//********************関数宣言
// function 関数名(引数) {
//  実行する処理;
//  return 戻り値;
// }
// 関数名(引数);

//▼例
function greeting01(name) {
  return 'ようこそ、' + name + 'さん';  //戻り値
}


//▼引数も戻り値もなしの例
function greeting02() {
  console.log('ようこそ、引数も戻り値もなしさん');
}


//▼引数なしの例
function greeting03() {
  console.log('ようこそ、引数なしさん');
}


//▼戻り値なしの例 ※return文がない場合の戻り値はundefined
function greeting04(name) {
  const name = '戻り値なし';
}

console.log(greeting01('佐藤'));
greeting02();
greeting03();
greeting04();

// //戻り値なし、引数なしの例
// function hello() {
//   echo("こんにちは");
// }
// //関数の呼び出し
// console.log(hello() + '');
// hello();






// // function 関数名(引数1, 引数２) {
// //   処理
// // return 戻り値;
// // }
// // 関数名(引数);

// function btsBirthday($y, $m, $d) {
//   //引数1と引数2を足して$totalに入れる
//   $birthday = { $y } + { $m } + { $d };
//   return $birthday;  //$totalを戻り値として返す
// }
// //作った関数の呼び出し
// $kekka = btsBirthday(2016, 06, 13);
// console.log($kekka);





//********************無名関数、匿名関数、関数式、関数リテラル
// const 関数名 = function (引数1, 引数２) {
//   処理
// }


//例----------------------------
const bts02 = function () {
  console.log('無名関数↓↓↓↓');
  console.log('私の推しは');
  console.log('ジョングクです');
}
bts02();

const bts03 = function army() {
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
const btsArrow01 = () => {
  console.log('アロー関数↓↓↓↓');
  console.log('私の推しは');
  console.log('ジョングクです');
}
btsArrow01();
//例(簡素化)----------------------------
const btsArrow02 = () => { console.log('アロー関数 簡素化→→→→私の推しはジョングクです'); }
btsArrow02()
//例(もっと簡素化)----------------------------
const btsArrow03 = () => console.log('アロー関数 もっと簡素化→→→→私の推しはジョングクです');
btsArrow03()
