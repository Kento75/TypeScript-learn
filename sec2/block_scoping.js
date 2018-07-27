function f(input) {
    var a = 100;
    if (input) {
        // ここからでも 'a' にアクセスすることができる
        var b_1 = a + 1;
        return b_1;
    }
    // エラー。 ここでは 'b' にはアクセスできない
    return b;
}
