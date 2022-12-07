const fs = require('fs');
const rawData = fs.readFileSync('./input.txt', 'utf8');

// pour accueillir les 9 piles, je crée un tableau de 9 tableaux
// [[],[],[]...]
let stacks = [];
for (let index = 0; index < 9; index++) {
  stacks.push([])
}
// ensuite je récupère la partie de l'input qui contient les piles
// et j'en fait un tableau de lignes
let data = rawData.split("\n\n")[0].split('\n');
// je supprime la dernière ligne qui n'est pas utile
data = data.slice(0, data.length - 1);
// je renverse le tableau pour commencer par le fond de chaque pile
data.reverse();
// je parcours chaque ligne
data.forEach((line) => {
  let currentStack = 0;
  // je parcours la chaine en partant de l'index 1, puis en
  // incrémantant de 4 (1,5,9 etc..)
  for (let index = 1; index < line.length; index += 4) {
    // si le caractère à cette position n'est pas un espace
    if (line[index].charCodeAt(0) !== 32) {
      // je l'ajoute à la pile courante
      stacks[currentStack].push(line[index])
    }
    // le prochain tour de boucle concerne la pile suivante
    currentStack += 1;
  }
})

//console.log(stacks)
const originalStacks = JSON.parse(JSON.stringify(stacks))

// me voila avec 1 tableau 'stacks' contenant 9 tableaux représentant nos 9 piles de caisses.
// je crée une fonction capable de bouger 1 caisse d'une pile à une autre
function moveCrate(stacks, from, to) {
  stacks[to].push(stacks[from].pop())
}

// je crée une fonction capable de bouger plusieurs caisses d'une pile à une autre, une par une
function moveCrates(stacks, qty, from, to) {
  for (let index = 0; index < qty; index++) {
    moveCrate(stacks, from, to)
  }
}

// je parcours les lignes contenant les ordres de déplacement et je bouge les caisses
data = rawData.split("\n\n")[1].split('\n').forEach(order => {
  //le plus simple pour récupérer les infos... une expression régulière
  const command = order.match(/move (\d+) from (\d+) to (\d+)/);
  moveCrates(stacks, +command[1], +command[2] - 1, +command[3] - 1)
})

// on récupère les lettres aux sommets des 9 piles
console.log(stacks.reduce((str, stack) => str + stack[stack.length - 1], ''))


/* part 2 */
function moveMultiCrates(stacks, qty, from, to) {
  // on récupére les caisses à déplacer
  const cratesToMove = stacks[from].slice(stacks[from].length - qty, stacks[from].length);
  // on les ajoute sur la pile 'to'
  stacks[to].push(...cratesToMove)
  // on les supprime de la pile 'from'
  stacks[from].splice(stacks[from].length - qty, qty)
}

// je parcours les lignes contenant les ordres de déplacement et je bouge les caisses
data = rawData.split("\n\n")[1].split('\n').forEach(order => {
  //le plus simple pour récupérer les infos... une expression régulière
  const command = order.match(/move (\d+) from (\d+) to (\d+)/);
  moveMultiCrates(originalStacks, +command[1], +command[2] - 1, +command[3] - 1)
})

// on récupère les lettres aux sommets des 9 piles
console.log(originalStacks.reduce((str, stack) => str + stack[stack.length - 1], ''))