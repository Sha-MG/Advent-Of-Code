const { Console } = require('console');
const fs = require('fs');
const rawData = fs.readFileSync('./input.txt', 'utf8');
let data = rawData.split("\n")

// Trouver les zones en commun dans chaque paire
// Repérer celles qui sont complètement incluses dans l'autre

// let compteurTotal = 0 ;

// for(duo of data){

//     console.log(duo)
//     // Récupère les ranges de chaque duo
//     let duoSections= duo.split(',')
//     let duoRange = duoSections.toString().split(/[-,]+/)

//     // Check si l'un contiens l'autre

//     if(Number(duoRange[0])<=Number(duoRange[2]) && Number(duoRange[1])>=Number(duoRange[3]) || Number(duoRange[2])<=Number(duoRange[0]) && Number(duoRange[3])>=Number(duoRange[1]) ){

//         compteurTotal++;
//         console.log(`Range 1 : ${duoRange[0]}-${duoRange[1]} || Range 2 : ${duoRange[2]}-${duoRange[3]}. Total : ${compteurTotal}`)
//     }

// }

let compteurTotal = 0 ;

for(duo of data){

    let test = false ;

    // Récupère les ranges de chaque duo
    let duoSections= duo.split(',')
    let duoRange = duoSections.toString().split(/[-,]+/)

    // Setup le compteur pour qu'il soit égale a la valeur basse de la range du premier elfe
    let compteur1 = Number(duoRange[0]) ;
    let premierElfeRange = [];

    // Tant que le compteur atteins pas la range haute du premier Elfe
    while(compteur1 <= Number(duoRange[1])){
        premierElfeRange.push(compteur1);
        compteur1++
    }

   // Setup le compteur pour qu'il soit égale a la valeur basse de la range du deuxième elfe
   let compteur2 = Number(duoRange[2]) ;
   let deuxiemeElfeRange = [];

    // Tant que le compteur atteins pas la range haute du deuxieme Elfe
    while(compteur2 <= Number(duoRange[3])){
        deuxiemeElfeRange.push(compteur2);
        compteur2++
    }

    let compteur = 0

    while( test=false || compteur<premierElfeRange.length){
        if(deuxiemeElfeRange.includes(premierElfeRange[compteur])){
            test = true ;
            compteurTotal++
            break ;
        }
        compteur++ ;
    }

}


console.log(compteurTotal)