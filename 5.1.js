function askTvSeries(){
let tvSeries = {
    title: prompt("Quel est le titre de votre série préférée? "),
    yearProduc: parseInt(prompt("Donnez moi son année de production? ")),
    namesActors: []
}
let actors = prompt("Qui jouent dans cette série? ");
while (actors != " "){
    tvSeries.namesActor.push(actors);
    actors = prompt("Qui jouent dans cette série? : ")

}
return tvSeries;
}

console.log(askTvSeries());
