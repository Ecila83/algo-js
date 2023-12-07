let min = prompt("votre nombre minimum ? :");
let max = prompt("votre nombre maximum ? :");
let current = prompt("nombre aleatoire? :");

if (current < max && current > min) {
    console.log(`${current} se situe entre les deux autres`);
} else {
    console.log(current + " ne se situe pas entre les deux autres.");
}

