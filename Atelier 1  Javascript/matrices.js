function additionMatrices(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

let mat1 = [
    [1, 2],
    [3, 4]
];
let mat2 = [
    [5, 6],
    [7, 8]
];

console.log("Addition des matrices: ", additionMatrices(mat1, mat2));
