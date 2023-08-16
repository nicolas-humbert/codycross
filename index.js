import * as fs from "fs";
import { ALPHABET } from "./constants.js";

function parseHtml(dom, letter) {
  let cleanHtmlPartOne = dom.split(`<ul class="entrées">`)[1];
  let cleanHtmlPartTwo = cleanHtmlPartOne.split(`</ul>`)[0];

  let separateLines = cleanHtmlPartTwo.split(`<a href="/lexies/mots/`);

  let preWords = [];
  for (let i = 0; i < separateLines.length; i++) {
    let word = separateLines[i].split(`"`)[0];
    preWords.push(word.replace("(-)", "-").replace("(s)", "").toLowerCase());
  }

  let res = [];
  for (let j = 0; j < preWords.length; j++) {
    if (
      preWords[j].startsWith(letter) ||
      preWords[j].startsWith(letter.toUpperCase())
    ) {
      res.push(preWords[j]);
    }
  }

  console.log(`Lettre ${letter}: ${res.length} mots.`);
  return res;
}

function handleLetterLogic(letter) {
  let letterPage = fs.readFileSync(`./public/${letter}.html`, {
    encoding: "utf-8",
  });

  const letterWords = parseHtml(letterPage, letter);

  fs.writeFile(`./public/${letter}.txt`, letterWords.toString(), (err) => {
    if (err) console.log(err);
    else {
      console.log(`File ${letter}.txt written successfully\n`);
    }
  });
}

function createTxtFiles() {
  for (let i = 0; i < ALPHABET.length; i++) {
    let l = ALPHABET[i];
    handleLetterLogic(l);
  }
}

createTxtFiles();
