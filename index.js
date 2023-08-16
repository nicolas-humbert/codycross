import * as fs from "fs";

function letterPageToArray(letter) {
  let letterPage = fs.readFileSync(`./public/${letter}.txt`, {
    encoding: "utf-8",
  });

  return letterPage.split(",");
}

let arr = letterPageToArray("a");

function getWordsOfLengthX(words, size) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length == size) res.push(w);
  }

  return res;
}

console.log(getWordsOfLengthX(arr, 5));
