// シャドーイングは避けるべきだが、TS では変数が重複した場合
// 別名をつけて回避してくれる
function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
      }
  }

  return sum;
}