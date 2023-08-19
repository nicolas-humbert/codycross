# Codycross Finder

Le but de ce petit bout de code est de proposer des solutions selon une liste de mots prédéfinis.

## Usage

### Variables d'ajustement

```js
const contains = ["a4", "z3", "u1"];
const notContains = ["p", "h", "m", "b", "v", "j", "o"];
const valid = ["e5"];
```

contains:

- un A qui est ailleurs qu'à la quatrième position
- un Z qui est ailleurs qu'à la troisième position
- un U qui est ailleurs qu'à la première position

notContains:

- not contient pas les lettres P, H, M, B, V, J, et O

valid:

- un E se trouve à la cinquième position

```bash
WhiteCarrot42:~/node index.js
[ 'azure' ]
```

### Modification des valeurs

Jouez avec les valeurs à votre convenance! \
Modifiez la longueur des mots recherchés en changeant le premier paramètre de la fonction chainFilters. Actuellement seuls les tableaux pour les mots de 5 et 6 lettres ont été générés mais vous pouvez vous amuser avec le fichier lengthWording.js à générer les autres. Le jeu ne contient que des mots du jours en 5 ou 6 lettres. \
N'utilisez pas de majuscules ni d'accents (le jeu ne les utilise pas non plus donc c'était beaucoup plus simple de le gérer de cette façon). \
Le code ne gère pas bien les cas où la même lettre se retrouve plusieurs fois, mais vous devriez vous en sortir.

## Disclaimer

1. Ceci est juste un simple mini-projet récréatif, il n'a pas vocation à évoluer, mais vous pouvez toujours l'optimiser.
2. Le seeding des fichiers html ne renvoie pas des fichiers faciles à parser, ils ont donc tous été formattés avec VSCode, je vous conseille donc d'utiliser les fichiers déjà existants dans /public et de ne pas les remplacer, ou le parsing pourrait s'en retrouver affecté.
3. Le code n'est pas d'un niveau production-ready, je vous déconseille donc d'utiliser des snippets provenant de ce projet pour du travail professionel.
