function f(condition, x) {
  if (condition) {
      let x = 100;  // ブロックのスコープが異なれば宣言できる
      return x;
  }

  return x;
}

f(false, 0); // 0
f(true, 0);  // 100
