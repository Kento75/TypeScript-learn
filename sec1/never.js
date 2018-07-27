// 例外をスローするのでメソッドの最後まで絶対に到達しない
function error(message) {
    throw new Error(message);
}
// Never 型を return するなら、そのメソッドの戻り値も Never 型になる
function fail() {
    return error("Something failed");
}
// 無限ループするのでメソッドの最後まで絶対に到達しない
function infiniteLoop() {
    while (true) {
    }
}
