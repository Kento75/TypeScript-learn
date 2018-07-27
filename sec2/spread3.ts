class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // OK
clone.m(); // エラー!
