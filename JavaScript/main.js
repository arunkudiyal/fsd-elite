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

// const names = 'Pavan, Ram, Arun,, Pranay, Dinesh, Ayesha'
// let response = names.split(', ')
// console.log(response)

// console.log(names[3]);
// console.log(names.charAt(3))


// Q.1 -> Two numbers -> a / b -> if division is possible
// let a = 100
// let b = 20
// let c = a / b

// if(typeof a === 'number' && typeof b === 'number') {
//     if(b === 0) {
//         console.log('a/b is not possible')
//     } else {
//         console.log('a/b is possible')
//     }
// } else {
//     console.log('Not Possible')
// }

// let val = 13

// if(val % 2 === 0) {
//     console.log('EVEN')
// } else {
//     console.log('ODD')
// }


// let cel = 100
// let farh = (cel * (9/5)) + 32
// console.log(farh)

// let coupon = 'DIV50'
// let shop = 10500

// if(coupon === 'DIV50') {
//     // 10% discount
//     let discountedPrice = 0.1 * shop
//     let toPay = shop - discountedPrice
//     console.log(toPay);
// } else {
//     // 5% discount
//     let discountedPrice = 0.05 * shop
//     let toPay = shop - discountedPrice
//     console.log(toPay)
// }



// ARRAYS
// 1. By using Array Constructor

// let numbers = new Array(100)
// let numbers = new Array("String", "Values")
// let names = new Array('Name-1', 'Name-2', 'Name-3', 'Name-4', 'Name-5')
// let numbers = new Array(100, 200, 300, 400, 500)
// console.log(numbers)
// console.log(names)
// console.log(numbers[2])
// console.log(numbers.length)

// 2. By using a [ ]
// let stringArray = [ 'str1', 'str2', 'str3', 'str4', 'str5', 'str6' ]
// console.log(stringArray)

// let numArray = [ 100, 200, 300, 400, 500 ]
// console.log(numArray)

// const arr = [ 100, 'string', true, null, undefined ]
// console.log(arr)

// const arr = [ [10, 20, 30], [40, 50, 60], [79, 80, 90], [100, 110, 120] ]
// console.log(arr[2][2]);

// const fruits = ['Mango', 'Banana', 'Apple', 'Grapes', 'Orange', 'Pear']

// Add an element in the array
// const newLength = fruits.push('Pinapple')
// console.log(newLength, fruits);

// // Remove an elemnet from the array
// const remvedElt = fruits.pop()
// console.log(remvedElt);
// console.log(fruits);

// // Removing a data based on index
// fruits.splice(2, 1)
// console.log(fruits)

// const index = fruits.indexOf('Orange')
// console.log(index);


// CLASSES & OBJECTS

// class Form {
//     constructor(name, email, password, dob, mobile) {
//         this.name = name
//         this.email = email
//         this.password = password
//         this.dob = dob
//         this.mobile = mobile
//     }
//     constructor(length) {
//         this.length = length
//     }
// }

// // Create an object
// let formSubmissionOne = new Form("Arun Kudiyal", "abc@xyz.com", "myPassword", "05/07/1992", 1234567890)

// let formSubmissionTwo = new Form("New Name", "xyz@abc.com", "examplePwd", "01/02/1998", 345678910)

// let formSubmissionThree = new Form(100)

// console.log(formSubmissionOne)
// console.log(formSubmissionTwo);
// console.log(formSubmissionThree);


// .. contd Arrays
const fruits = [ "Mango", "Orange", "Banana", "Pears" ]

// Add a data in the array - push()
let newLen = fruits.push("Watermelon")
console.log(fruits, newLen);

// Delete a data from array - pop()
let poppedVal = fruits.pop()
console.log(poppedVal);
console.log(fruits);

// indexOf
let index = fruits.indexOf('Watermelon')
console.log(index)

// 
let newFruits = [ ...fruits ]
newFruits.pop()

console.log(newFruits);
console.log(fruits)