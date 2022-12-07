const fs = require('fs');

// lire le contenu du fichier
const rawData = fs.readFileSync('./input.txt', 'utf8');

// créer un tableau a partir des lignes
const tousLesElfes = rawData.split("\n\n");

// Un tableau qui regroupe le total de chaque elfe
let caloriesTousLesElfes = [];

// Pour chaque elfe du tableau
for (const unElfe of tousLesElfes) {

    const unAliment = unElfe.split('\n');
    const totalUnElfe = unAliment.reduce(
        (accumulator, currentValue) => accumulator + parseInt(currentValue), 0,
    )
    caloriesTousLesElfes.push(totalUnElfe)
  }

//   Le max de calorie et son index dans le tableau
let max = Math.max(...caloriesTousLesElfes)
let indexMAx = caloriesTousLesElfes.indexOf(Math.max(...caloriesTousLesElfes))

console.log(`C'est l'elfe numéro ${indexMAx} qui porte le plus de calories avec un total de : ${max}`)

// PARTIE 2 

let i= 1 ;
let troisElfes = 0 ;
while(i<4){

    // On cherche et on affiche le max
    let max = Math.max(...caloriesTousLesElfes)
    let indexMAx = caloriesTousLesElfes.indexOf(Math.max(...caloriesTousLesElfes))
    console.log(`${i}): Le n°${indexMAx} avec un total de : ${max} calories.`)

    troisElfes += max ;
    // On retire le max pour trouver le suivant
    caloriesTousLesElfes= caloriesTousLesElfes.filter(elfe => elfe != max);
    i++
}

console.log(`Ce qui nous fait un total de ${troisElfes} calories.`)