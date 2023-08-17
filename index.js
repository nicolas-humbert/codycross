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

function chainFilters(
  arr,
  containConditions,
  notContainedConditions,
  validConditions
) {
  let res = arr;
  for (let i = 0; i < containConditions.length; i++) {
    res = filterByContainedLetter(
      res,
      containConditions[i][0],
      containConditions[i][1]
    );
  }
  for (let i = 0; i < notContainedConditions.length; i++) {
    res = filterByNotContainedLetter(res, notContainedConditions[i]);
  }
  for (let i = 0; i < validConditions.length; i++) {
    res = filterByValidLetter(
      res,
      validConditions[i][0],
      validConditions[i][1]
    );
  }
  return res;
}

const contains = ["a3", "z2"];
const notContains = ["p", "h", "m", "b", "v", "j", "o"];
const valid = ["e4"];

console.log(chainFilters(fileArray5, contains, notContains, valid));
