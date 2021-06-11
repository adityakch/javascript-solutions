function requiredRow(matrix) {
    let arr = [];
    for (let i of matrix) {
        let count = 0;
        for (let j of i) {
            if (j === 1) {
                count ++;
            }
        }
        arr.push(count);
        //console.log(arr)
    }
    let ind = arr.indexOf(Math.max(...arr));
    return ind;
}


let matrix  = [[0,0,0,1],[1,0,1,1],[1,1,1,1],[0,0,0,0]];
console.log(requiredRow(matrix));
