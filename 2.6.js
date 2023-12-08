
let nbr = parseFloat(prompt("choisissez un chiffre de 1 à 7 : "));

switch (nbr) {
    case 1:
        console.log('Nous sommes lundi!');
        break;
    case 2:
        console.log('Nous sommes mard!');
        break;
    case 3:
        console.log('Nous sommes mercredi!');
        break;
    case 4:
        console.log('Nous sommes jeudi!');
        break;

    case 5:
        console.log('Nous sommes Vendredi!');
        break;
    case 6:
        console.log('Nous sommes Samedi!');
        break;
    case 7:
        console.log('Nous sommes Dimanche!');
        break;
    default:
        console.log(`Votre chiffre n'est pas compris entre 1 et 7`);
}