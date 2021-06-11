function requiredRow(matrix) {
    a = matrix.length;
    //console.log(a);
    b = matrix[0].length;
    //console.log(b);
    max_row_ind = 0;
    ind = b-1;
    
    for (let i=0; i<a; i++) {
        if ((ind >= 0) && (matrix[i][ind] == 1)) {
            ind -= 1;
            max_row_ind = i;
        }
    }
    if ((max_row_ind == 0) && (matrix[0][b-1] == 0)) {
        return 0;
    }
    return max_row_ind;
}


let matrix  = [[0,0,0,1],[1,0,1,1],[1,1,1,1],[0,0,0,0]];
console.log(requiredRow(matrix));