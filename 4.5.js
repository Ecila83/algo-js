function calcDistance(A,B){
    const x1 = A[0];
    const y1 = A[1];
    const x2 = B[0];
    const y2 = B[1];
    // math.sqrt racinecarée / math.pow puissance

    const distance = Math.sqrt(Math.pow(x2 -x1, 2)+(y1 - y2, 2));
//.toFixed() pour definir le nombres de chiffre apres la virgule 
    return distance.toFixed(2);

}

const A = [1,1];
const B = [2,2];

console.log(calcDistance(A,B));