var _a;
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // 1
console.log(second); // 2
first = input[0];
second = input[1];
// 変数の入れ替え
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
