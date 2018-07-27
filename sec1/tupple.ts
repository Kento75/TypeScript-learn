// 宣言
let x: [string, number];    // 要素１は文字列、要素２は数値
// 初期化
x = ["hello", 10]; // OK
// 初期化 (間違い)
x = [10, "hello"]; // エラー  要素２が文字列だから

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // エラー。 2 番目の要素は 'number' なので substr は使えない。

// 範囲外の値の場合

x[3] = "world"; // OK。 'string' は 'string | number' 型に代入可能。

console.log(x[5].toString()); // OK。 'string' と 'number' 両方にあるメソッドは呼び出し可。

x[6] = true; // エラー。 'boolean' は 'string | number' 型には代入できない。
