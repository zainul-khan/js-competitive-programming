function findMaxAvgOfSubArr(arr, k) {
    let maxAvg = 0;
    for(let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j]
        }
        maxAvg = Math.max(maxAvg, Math.floor(sum/k))
    }   
    console.log(maxAvg)
}
findMaxAvgOfSubArr([1,2,5,4], 3)