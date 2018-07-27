function f(condition, x) {
    if (condition) {
        var x_1 = 100; // ブロックのスコープが異なれば宣言できる
        return x_1;
    }
    return x;
}
f(false, 0); // 0
f(true, 0); // 100
