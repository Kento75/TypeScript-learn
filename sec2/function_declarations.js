function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function f(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f(); // OK。デフォルト値は { a: "", b: 0 }
