import * as fs from "fs";
import { ALPHABET } from "./constants.js";

function openLengthFileToArray(length) {
  let file = fs.readFileSync(`./public/${length}.txt`, {
    encoding: "utf-8",
  });

  return file.split(",");
}

let fileArray5 = openLengthFileToArray(5);
let fileArray6 = openLengthFileToArray(6);

function filterByContainedLetter(arr, letter, notPosition) {
  let res = arr.filter((w) => w.includes(letter) && w[notPosition] !== letter);

  return res;
}

function filterByNotContainedLetter(arr, letter) {
  let res = arr.filter((w) => !w.includes(letter));
  return res;
}

function filterByValidLetter(arr, letter, position) {
  let res = arr.filter((w) => w[position] === letter);
  return res;
}

console.log(filterByContainedLetter(fileArray5, "h", 1));
console.log(filterByNotContainedLetter(fileArray5, "e"));
console.log(filterByValidLetter(fileArray5, "z", 3));
