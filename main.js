async function sub() {
  console.log("subが呼ばれました");
  try {
    const a = 0;
    a = 1; // エラー発生！
    res = a;
    return res;
  } catch (e) {
    console.error("subでエラーが発生しました", e); // キャッチされる
    throw e; // 追記
  }
}

async function func1() {
  try {
    console.log("func1が呼ばれました");
    const result = await sub(); // この関数内でエラー発生
    console.log("resultにsubの結果を格納しました");
  } catch (e) {
    console.error("func1でエラーが発生しました", e); // キャッチされる
  }
}

func1();
