const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getUsito(letter) {
  fetch(`https://usito.usherbrooke.ca/index/mots#${letter}`)
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
  for (let char = 0; char < alphabet.length; char++) {
    const letter = alphabet[char];
    getUsito(letter);
    console.log(`Lettre ${letter} en cours de traitement...`);
  }
}

iterateOnAlphabet();
