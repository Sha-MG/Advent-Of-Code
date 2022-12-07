const fs = require('fs');
// lire le contenu du fichier
const rawData = fs.readFileSync('./input.txt', 'utf8');
// créer un tableau a partir des lignes
const tousLesRounds = rawData.split("\n");


let i=0;
let scoreTotal = 0 ;

// Partie 1 
// for(unRound of tousLesRounds){

//     round = unRound.split(" ");

//     console.log(`Round n°${i} : ${round[0]} vs ${round[1]}`)

//     switch (round[1]) {
//         case 'X': 
//             scoreTotal += 1 ;
//             switch (round[0]){
//                 case 'A' :
//                     scoreTotal += 3 ;
//                     console.log('Draw')
//                     break ;
//                 case 'B' :
//                     console.log('Perdu')
//                     break ;
//                 case 'C' :
//                     scoreTotal += 6 ;
//                     console.log('Gagné')
//                     break;
//             }
//             break ;
//         case 'Y':
//             scoreTotal += 2 ;
//             switch (round[0]){
//                 case 'A' :
//                     scoreTotal += 6 ;
//                     console.log('Gagné')
//                     break ;
//                 case 'B' :
//                     scoreTotal += 3 ;
//                     console.log('Draw')
//                     break ;
//                 case 'C' :
//                     console.log('Perdu')
//                     break;
//             }
//             break;
//         case 'Z':
//             scoreTotal += 3 ;
//             switch (round[0]){
//                 case 'A' :
//                     console.log('Perdu')
//                     break ;
//                 case 'B' :
//                     scoreTotal += 6 ;
//                     console.log('Gagné')
//                     break ;
//                 case 'C' :
//                     scoreTotal += 3 ;
//                     console.log('Draw')
//                     break;
//             }
//             break;
//     }



//     i++
// }


// Partie 2

for(unRound of tousLesRounds){

    round = unRound.split(" ");

    console.log(`Round n°${i} : ${round[0]} vs ${round[1]}`)

    switch (round[0]) {
        case 'A': 
            switch (round[1]){
                case 'X' :
                    scoreTotal += 3 ;
                    console.log('Perdu')
                    break ;
                case 'Y' :
                    scoreTotal += 4 ;
                    console.log('Draw')
                    break ;
                case 'Z' :
                    scoreTotal += 8 ;
                    console.log('Gagné')
                    break;
            }
            break ;
        case 'B':
            switch (round[1]){
                case 'X' :
                    scoreTotal += 1 ;
                    console.log('Perdu')
                    break ;
                case 'Y' :
                    scoreTotal += 5 ;
                    console.log('Draw')
                    break ;
                case 'Z' :
                    scoreTotal += 9 ;
                    console.log('Gagné')
                    break;
            }
            break;
        case 'C':
            switch (round[1]){
                case 'X' :
                    scoreTotal += 2 ;
                    console.log('Perdu')
                    break ;
                case 'Y' :
                    scoreTotal += 6 ;
                    console.log('Draw')
                    break ;
                case 'Z' :
                    scoreTotal += 7 ;
                    console.log('Gagné')
                    break;
            }
            break;
    }

    i++

    console.log(scoreTotal)
}

console.log(scoreTotal)