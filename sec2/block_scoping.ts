function f(input: boolean) {
  let a = 100;

  if (input) {
      // ここからでも 'a' にアクセスすることができる
      let b = a + 1;
      return b;
  }

  // エラー。 ここでは 'b' にはアクセスできない
  return b;
}