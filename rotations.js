function rotate(arr , d , n) {
    for (i = 0; i < d; i++)
        rotations(arr, n);
    }
 
function rotations(arr , n) {
    let i, val;
    val = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = val;
}
 
function result(arr , n) {
    str = "";
    for (i = 0; i < n; i++)
        str += (arr[i] + " ");
    console.log(str);
}

let arr = [1,2,3,4,5];
d = 2;
n = 5;

rotate(arr, d, n);
result(arr, n);