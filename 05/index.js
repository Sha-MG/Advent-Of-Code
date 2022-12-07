const fs = require('fs');

// On sépare le dessin des instructions
const [caissesEmpilement, instructions_base] = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
	.split('\n\n');

const caissesLigne = caissesEmpilement.split('\n');
caissesLigne.pop();

// Challenge 1 
// On veux boucler sur chaque instruction "move X" pour bouger les caisses
// Faire un tableau pour chaque colonne et push/delet chaque instruction


// Pour les instructions
// On veux faire un tableau d'objets ayant comme propriétés
// Le nombre de caisses, l'origine, et l'arrivée
const instructions = instructions_base.split('\n').map((line) => {

	// On déclare move/from/to 
    // A partir de la recherche de .exec qui renverra un tableau
	let [, move, from, to] = /move (\d+) from (\d+) to (\d+)/.exec(line);

    // Bien les passer en chiffre pour éviter les surprises
	move = parseInt(move, 10);
	from = parseInt(from, 10);
	to = parseInt(to, 10);

	return { move, from, to };
});


let colonne = {
    1 : [],
    2 : [],
    3 : [],
    4 : [],
    5 : [],
    6 : [],
    7 : [],
    8 : [],
    9 : [],
}

for(caisse of caissesLigne){

    let charact = Array.from(caisse);
    let index = 0 ;

    while(index<=8){

        let indexInterne = 1+(4*index)

        if(charact[indexInterne-1] !== " " && charact[indexInterne] !== " " && charact[indexInterne+1] !== " ") { 
            colonne[`${index+1}`].push(`${charact[indexInterne-1]} ${charact[indexInterne]} ${charact[indexInterne+1]}`)
        }

        index++
    }
}

let indexColonne = 1 ;

while( indexColonne <= 9){

    colonne[indexColonne].reverse()
    indexColonne++
}

// Maintenant on doit executer les instructions sur les colonnes
// Donc pour toutes les instructions :

for(instruction of instructions){
    // On boucle sur "move"
    let index = 0 ;

    while( index < instruction.move ){

        let caisseToMove = " "
        caisseToMove = colonne[instruction.from][0]

        colonne[instruction.to].push(caisseToMove)
        colonne[instruction.from].shift()

        index++
    }

}

console.log(colonne)