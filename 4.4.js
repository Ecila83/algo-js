let tab =["Alexis","Alice","Cassidy","Hanen","Jeremy","Noé","Winona"];
let b = Math.floor(Math.random()*tab.length);

function pickLearner(imputAr, n){
    let arrayLearner = [];
    for (let i=0; i<n; i++){
        let students = Math.floor(Math.random()*imputAr.length);
        arrayLearner.push(imputAr[students]);
    }
    console.log(arrayLearner);
}
pickLearner(tab,b);