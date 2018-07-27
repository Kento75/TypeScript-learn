function f(input) {
    var a = 100;
    if (input) {
        // ここからでも 'a' にアクセスすることができる
        var b = a + 1;
        return b;
    }
    // エラー。 ここでは 'b' にはアクセスできない
    return b;
}
