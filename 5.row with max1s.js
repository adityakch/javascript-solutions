function requiredRow(matrix) {
    a = matrix.length;
    //console.log(a);
    b = matrix[0].length;
    //console.log(b);
    c = 0;
    ind = b-1;
    
    for (let i=0; i<a; i++) {
        if ((ind >= 0) && (matrix[i][ind] == 1)) {
            ind -= 1;
            c = i;
        }
    }
    if ((c == 0) && (matrix[0][b-1] == 0)) {
        return 0;
    }
    return c;
}


let matrix  = [[0,0,0,1],[1,0,1,1],[1,1,1,1],[0,0,0,0]];
let res = requiredRow(matrix);
console.log(res);
