// Count frequency of each element in the array

const arr = [10, 1, 30, 1, 1, 2, 1, 10]
const map = new Map()
// let count = 1;

for(let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        // get the key val
        // console.log('haiii', arr[i])
        let val = map.get(arr[i])
        console.log(val)
        map.set(arr[i], val += 1)
    } else {
        map.set(arr[i], 1)
    }
}

console.log(map)