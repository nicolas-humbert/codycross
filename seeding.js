import * as fs from "fs";
import { ALPHABET } from "./constants.js";

function getUsito(letter) {
  fetch(`https://usito.usherbrooke.ca/index/mots/tous/${letter}#${letter}`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      fs.writeFile(`./public/${letter}.html`, html, (err) => {
        if (err) {
          console.error(err);
        }
      });
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

function iterateOnAlphabet() {
  for (let char = 0; char < ALPHABET.length; char++) {
    const letter = ALPHABET[char];
    getUsito(letter);
    console.log(`Lettre ${letter} en cours de traitement...`);
  }
}

iterateOnAlphabet();
