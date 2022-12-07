const fs = require('fs');
const rawData = fs.readFileSync('./input.txt', 'utf8');
let data = rawData.split("\n")

// On trouve la lettre en commun
 let sacCompartimentés = data.map((line) => {

// On sépare le sac en deux moitiés
    const premierCompartiment = line.substring(0, line.length / 2).split('')
    const deuxiemeCompartiment = line.substring(line.length / 2).split('')
// On cherche l'élément contenu dans le premier compartiment étant présent dans le second
    let elementCommun = premierCompartiment.filter(item => deuxiemeCompartiment.includes(item))[0]

    return elementCommun
  })

  let i = 0 ;
  let valeurTotale = 0 ;

  for(element of sacCompartimentés){
    if(element === element.toLowerCase()){
        let value = (element.charCodeAt(0))-96 ;
        valeurTotale += value ;
        // console.log(`Sac n°${i}, élement commun : ${sacCompartimentés[i]} valeur : ${value}`)
    }else{
        let value= (element.charCodeAt(0))-38;
        valeurTotale += value ;
        // console.log(`Sac n°${i}, élement commun : ${sacCompartimentés[i]} valeur : ${value}`)
    }

    i++
  }

  console.log(`La valeur totale de tous les élèments en communest : ${valeurTotale}`)

//   PARTIE 2 !

// Groupe d'elfe = Par ligne de 3 
// Tag du groupe = La seule lettre en commun
// Valeur du groupe = comme pour la partie 1
// Total = on cumule le tout


data = rawData.split("\n")

const badges = [];

// on fait une boucle pour analyser les lignes 3 par 3
for (let index = 0; index < data.length; index += 3) {

  // on transforme chaque ligne en un tableau de lettres
  const elfe1 = data[index].split('');
  const elfe2 = data[index + 1].split('');
  const elfe3 = data[index + 2].split('');

  // on cherche les lettres communes entre les 2 premières lignes
  let badge = elfe1.filter(lettre => elfe2.includes(lettre))

  // on cherche les lettres communes avec la 3ème ligne
  badge = badge.filter(lettre => elfe3.includes(lettre))

  // on ajoute le badge au tableau
  badges.push(badge[0])
}

console.log(badges)

let valeurTotaleBadges = 0;
i= 0 ;

for(badge of badges){
    if(badge === badge.toLowerCase()){
        let value = (badge.charCodeAt(0))-96 ;
        valeurTotaleBadges += value ;
    }else{
        let value = (badge.charCodeAt(0))-38;
        valeurTotaleBadges += value ;
    }

    i++
  }

  console.log(`La valeur totale de tous les badges est : ${valeurTotaleBadges}`)