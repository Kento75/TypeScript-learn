function f(x) {
  let x = 100; // エラー: 引数と重複している
}

function g() {
  let x = 100;
  var x = 100; // エラー: 'x' の宣言を複数持てない
}