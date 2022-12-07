const fs = require('fs');
const rawData = fs.readFileSync('./input.txt', 'utf8');

let lettres = rawData.split('')

let tableauLettres = [ lettres[0], lettres[1], lettres[2], lettres[3], lettres[4], lettres[5], lettres[6], lettres[7], lettres[8], lettres[9], lettres[10], lettres[11], lettres[12], lettres[13] ] ;
let indexLettre = 13 ;

// Partie 1 
let checker = false

while(checker === false){
let checkerLettreUnique = 0 ;

    for(lettre of tableauLettres){
        let tableauTest = tableauLettres.filter(letter => letter !== lettre)
        if( tableauTest.length < 13 ){
            console.log('Y avait 2 pareil')
        }else{
            console.log('Ok pas de lettre pareil')
            checkerLettreUnique ++
        }
        if(checkerLettreUnique === 14 ){

            checker = true ;
        }
    }

    tableauLettres.shift();
    tableauLettres.push(lettres[indexLettre+1])
    indexLettre++
}

console.log(`Il a fallu : ${indexLettre} caractères`) ;

// Partie 2 
