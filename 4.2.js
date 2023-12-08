/*cette fonction renvoie un chiffre aleatoire compris entre 1 et 10 
mais pour quel renvoie un chiffre entier on est obligé d'integrer le Math.floor*/

function random(min, max) {
    return min +Math.floor( Math.random() * (max - min));
  }
  console.log(random(1,10));