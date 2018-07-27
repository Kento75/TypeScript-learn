try {
  throw "oh no!";
}
catch (e) {
  console.log("Oh well.");
}

// エラー。ここでは 'e' にアクセスできない
console.log(e);
