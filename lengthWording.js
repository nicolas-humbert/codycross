import * as fs from "fs";
import { ALPHABET } from "./constants.js";

function letterPageToArray(letter) {
  let letterPage = fs.readFileSync(`./public/${letter}.txt`, {
    encoding: "utf-8",
  });

  return letterPage.split(",");
}

function getWordsOfLengthX(wordsArr, size) {
  let res = [];
  for (let i = 0; i < wordsArr.length; i++) {
    const w = wordsArr[i];
    if (w.length == size) res.push(w);
  }

  return res;
}

function generateWordsFileByLength(length) {
  let res = [];
  for (let i = 0; i < ALPHABET.length; i++) {
    const l = ALPHABET[i];

    const letterArray = letterPageToArray(l);
    const wordsOfLength = getWordsOfLengthX(letterArray, length);
    res.push(wordsOfLength);
  }

  fs.writeFile(`./public/${length}.txt`, res.toString(), (err) => {
    if (err) console.log(err);
    else {
      console.log(`File ${length}.txt written successfully.`);
    }
  });
}

generateWordsFileByLength(5);
generateWordsFileByLength(6);
