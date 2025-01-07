let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix() {
    const newMatrix = [];
    const n = matrix.length;

    for(let i=0;i<matrix[0].length;i++){
        const row = [];
        for (let j = n-1; j >= 0; j--) {
            row.push(matrix[j][i]) 
        }
        newMatrix.push(row)
    }
    

   console.log(newMatrix);
}

rotateMatrix()