var notSure = 4;
notSure.ifItExists(); // OK。 実行時には ifItExists メソッドが存在するはず
notSure.toFixed(); // OK。 toFixed メソッドは存在する (けど、コンパイル時チェックはしない)
var prettySure = 4;
prettySure.toFixed(); // エラー。 toFixed メソッドは Object 型には存在しない。
