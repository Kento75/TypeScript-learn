function foo() {
    // 'a' をキャプチャすることはできる
    return a;
}
// 不正な 'foo' の呼び出し ('a' の宣言前)
// 実行時にエラーになる
foo();
var a;
