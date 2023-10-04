console.log('oh lawdy, he chonky')

// arrays are ordered lists
// arrays start at 0 not 1

let arrNum = [1, 2, 3, 4, 5];

// let num = 5
// num = num + num
// num === 10

// let bigNum = [...Array(10).keys()] // this will create an array of numbers. Find out why.

// create a variable to hold the value of a sum
let sum = 0;

// for (let i = 0; i < arrNum.length; i++) {
//     // add each index to the sum
//     sum = sum + arrNum[i]
//     console.log(sum)
// }
let numArr = []
while (sum < 1000) {
    numArr.push(sum)
    sum++
    console.log(numArr)
}

// arr.push(value)
// arr = [value]
// arr.push(value)
// arr = [value, value]

const pageTitle = document.querySelector("#title");
console.log(pageTitle)

const featureParagraph = document.querySelector(".wrap");
console.log(featureParagraph)

const allButtons = document.querySelectorAll("button");
console.log(allButtons)