function triplet(arr1,arr2,arr3) {
    let n = arr1.length;
    let a = 0;
    let b= 0;
    let c = 0;
    let d = 1000000;
    let i = 0;
    let j = 0;
    let k = 0;
    
    arr1.sort(function(a,b){return a-b});
    arr2.sort(function(a,b){return a-b});
    arr3.sort(function(a,b){return a-b});
    
    while (i<n && j<n && k <n) {
        let sum = arr1[i] + arr2[j] + arr3[k];
        let maxVal = Math.max(Math.max(arr1[i],arr2[j]),arr3[k]);
        let minVal = Math.min(Math.min(arr1[i],arr2[j]),arr3[k]);
        if (minVal === arr1[i]) {
            i ++;
        } else if (minVal === arr2[j]) {
            j ++;
        } else {
            k ++;
        }
        if (d > (maxVal - minVal)) {
            d = maxVal - minVal;
            a = maxVal;
            b = sum - (maxVal+minVal);
            c = minVal;
        }
    }
    let result = (a + ", " + b + ", " + c);
    return result;
}



let arr1 = [5,2,8];
let arr2 = [10,7,12];
let arr3 = [9,14,6];

let res = triplet(arr1,arr2,arr3);
console.log(res);