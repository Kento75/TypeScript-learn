let o = {
  a: "foo",
  b: 12,
  c: "bar"
}
let { a, b } = o;

({ a, b } = { a: "baz", b: 101 });
