// const myArray = [1,2,3,4,5,6,7,8,9,10]

// const animals = ["aardvark", "alligator", "alpaca", "anteater", "armadillo", "capybara", "dinosaur", "dolphin", "giraffe", "shark", "sloth", "zebra"]

// this function below is not tested so please don't be mad if it doesn't work!
// function logarithmicSearch(array, searchItem) {

//     let subarray = array

//     while (subarray.length > 0) {
//         const halfwayPoint = Math.floor( subarray.length / 2 )
//         if (subarray[halfwayPoint] === searchItem) {
//             return subarray[halfwayPoint]
//         } else {
//             if (searchItem > subarray[halfwayPoint]) {
//                 subarray = subarray.slice(halfwayPoint, subArray.length)
//             } else {
//                 subarray = subarray.slice(0, halfwayPoint)
//             }
//         }
//     }

//     return null

// }

// logarithmicSearch(animals)

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
let operations = 0

const arr = [4,8,16,32,64,3,7,22,2, 1000, 1]

const result = twoSum(arr, 1001)

console.log(result)

// 

function twoSum(numsArray, targetNumber) {

    const hashmap = {}
    let result

    numsArray.forEach((num, i) => {
        hashmap[num] = i
        console.log(hashmap)
        const mySoulmate = targetNumber - num
        operations++
        if (hashmap[mySoulmate] !== undefined) {
            result = [i, hashmap[mySoulmate]]
        }
    })

    return result

};

console.log(operations)
