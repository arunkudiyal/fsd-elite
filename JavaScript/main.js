// console.log('Hello from main.js...')

// console.error('This is an ERROR')
// console.warn('This is a WARNING')

// alert('THIS IS AN ALERT!')

// variableOne = '100'
// varTwo = variableOne + 23
// // console.log(typeof variableOne)
// console.log(varTwo)

// varThree = false
// varFour = varThree + 200
// console.log(varFour)

// result = 100 / 0
// console.log(result)

// console.log('200' + 'JavaScript')

// a = null
// console.log(typeof a)

// b = undefined
// console.log(typeof b)

// console.log(100 + '200' + false);
// console.log('String' - 'String' + false) // NaN
// console.log('100' + '200' + true)

// let a = 'Arun'
// console.log(a)

// var b = true
// console.log(b)

// const c = null
// console.log(c)


// STRINGS

// 1. using " ", ' ', ` `
// let name = 'Naman'
// console.log('The length of the string is : ' + name.length)
// console.log(name[1]);

// // 2. using String() constructor
// let name2 = new String('Naman')
// console.log('The length of the string is : ' + name2.length)
// console.log(name2[2]);
// console.log(name2);

// String Methods
// 1. case-changing-methods
// let str = 'some Value'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// // Conditionals
// let someVal = false
// if(someVal) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// Q:- str, if the 3rd character is 'm' or not
// let str2 = 'Arun'
// if(str2[2] == 'm') {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// const a = 100
// const b = 100

// if(a === b) {
//     console.log('Equal')
// } else {
//     console.log('Unequal')
// }


// Q:- Given an age and gender of a person, create a program to check if he or she can vote
// age = F >= 18 -> Vote
// age = M >= 21 -> Vote
// const gen = 'F'
// const age = 17


// if(gen === 'M') {
//     if(age >= 21) {
//         console.log('You can Vote')
//     } else {
//         console.log('You can NOT Vote')
//     }
// } else {
//     if(age >= 18) {
//         console.log('You can Vote')
//     } else {
//         console.log('You can NOT Vote')
//     }
// }


// Operators - AND (&&), OR (||) , NOT (!)
// if(gen == 'M' && age >= 21) {
//     console.log('You can Vote');
// } else if(gen === 'F' && age >= 18) {
//     console.log('You can Vote');
// } else {
//     console.log('You Can NOT Vote');
// }


// Finding the index
// const str = 'My name is Arun Kudiyal'
// // console.log(str.length)

// // console.log(str[2])
// // console.log(str.indexOf('a'))

// // Sub - String - 2 functions
// console.log(str.substr(7));
// console.log(str.substring(0, 9))

// const names = 'Pavan, Ram, Arun, Pranay, Dinesh, Ayesha'
// let response = names.split(', ')
// console.log(response)

// console.log(names[3]);
// console.log(names.charAt(3))