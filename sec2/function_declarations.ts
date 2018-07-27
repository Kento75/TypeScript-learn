type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}

function f({ a, b } = { a: "", b: 0 }): void {
  // ...
}
f(); // OK。デフォルト値は { a: "", b: 0 }
