function pairZero(arr) {
    if (arr.length == 0) return -1;

    for (let i=0;i<arr.length;i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = 0
        }
    }

    return arr
}






let arr = [1, 3, 4, 6, 80, 33, 23, 90]

console.log(pairZero(arr))