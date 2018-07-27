function f(x) {
    var x = 100; // エラー: 引数と重複している
}
function g() {
    var x = 100;
    var x = 100; // エラー: 'x' の宣言を複数持てない
}
