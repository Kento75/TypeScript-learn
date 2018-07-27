let input = [1, 2];
let [first, second] = input;
console.log(first); // 1
console.log(second); // 2

first = input[0];
second = input[1];

// 変数の入れ替え
[first, second] = [second, first];

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);
