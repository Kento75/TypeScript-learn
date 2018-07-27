declarefunctioncreate(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // エラー
create("string"); // エラー
create(false); // エラー
create(undefined); // エラー
