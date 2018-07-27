var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//let { a: newName1, b: newName2 } = o;
//let { a, b }: { a: string, b: number } = o;
var newName1 = o.a, newName2 = o.b;
