function f({ a, b = 0 } = { a: "" }): void {
  // ...
}
f({ a: "yes" }); // OK、デフォルト値 b = 0 が使用される
f(); // OK、デフォルト値 { a: "" } が使用され、さらにデフォルト値 b = 0 が使用される
f({}); // エラー、引数を指定する場合には 'a' は必須