function maxPathSum(mat) {
    n = 0;
    m = 0;
    for (let i of mat) {
        n += 1;
    }
    for (let j of mat[0]) {
        m += 1;
    }
    output = -1;
    for (i=0; i<m; i++) {
        output = Math.max(output,mat[0][i]);
    }
    for (i=1; i<n; i++) {
        output = -1;
        for (j=0; j<m; j++) {
            if ((j>0) && (j<m-1)) {
                mat[i][j] += Math.max(mat[i-1][j], Math.max(mat[i-1][j-1], mat[i-1][j+1]));
            }
            else if (j>0) {
                mat[i][j] += Math.max(mat[i-1][j], mat[i-1][j-1]);
            }
            else if (j<m-1) {
                mat[i][j] += Math.max(mat[i-1][j], mat[i-1][j+1]);
            }
            output = Math.max(mat[i][j], output);
        }
    }
    return output;
}


let mat = [ [ 10, 10, 2, 0, 20, 4 ],
        [ 1, 0, 0, 30, 2, 5 ],
        [ 0, 10, 4, 0, 2, 0 ],
        [ 1, 0, 2, 20, 0, 4 ] ];
 
console.log(maxPathSum(mat));
