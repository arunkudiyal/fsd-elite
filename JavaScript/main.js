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
// }

// // // Create an object
// let formSubmissionOne = new Form("Arun Kudiyal", "abc@xyz.com", "myPassword", "05/07/1992", 1234567890)
// console.log(formSubmissionOne);

// let formSubmissionTwo = new Form("New Name", "xyz@abc.com", "examplePwd", "01/02/1998", 345678910)

// let formSubmissionThree = new Form(100)

// console.log(formSubmissionOne)
// console.log(formSubmissionTwo);
// console.log(formSubmissionThree);


// const arr2 = [100, 'string', null, undefined, true]
// console.log(arr2);

// // .. contd Arrays
// const fruits = [ "Mango", "Orange", "Banana", "Pears" ]

// // Add a data in the array - push()
// let newLen = fruits.push("Watermelon")
// console.log(fruits, newLen);

// // Delete a data from array - pop()
// let poppedVal = fruits.pop()
// console.log(poppedVal);
// console.log(fruits);

// // indexOf
// let index = fruits.indexOf('Watermelon')
// console.log(index)

// // 
// let newFruits = [ ...fruits ]
// newFruits.pop()

// console.log(newFruits);
// console.log(fruits)


// const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ]

// days.push('New Day')
// days.pop()
// console.log(days.slice(1, 6));

// const strings = ['This is a', 'beautiful day', 'Come lets study JS']
// const string = 'This is a beautiful day lets learn JS'
// console.log(string.split(' '))

// // console.log();

// console.log(days.length);

// // Methods
// console.log(days.indexOf('Thu'))

// const newDays = days.slice(', ')
// console.log(newDays);

// console.log(days);
// let newDays = days
// let newDays = [ ...days ]
// newDays.pop()

// console.log(days);
// console.log(newDays);

// const twoDArray = [ [100, 200, 300], [400, 500, 600], [700, 800, 900] ]
// console.log(twoDArray[1][1]);



// OBJECTS IN JS
// const person = { 
//     name: 'John Doe', 
//     age: 40, 
//     email: 'john.doe@hotmail.com', 
//     phone: '1234567890',
//     hobbies: ['Watch TV', 'Playing soccer', 'Listening to Music'],
//     address: {
//         houseNo: 124,
//         street: 'Lane 2',
//         city: 'Hyderabad',
//         state: 'Telangana',
//         country: 'India'
//     }
// }
// // console.log(person);
// // console.log(person.name);

// console.log(`Hi, my name is ${person.name}, I am ${person.age} years old. I live in ${person.address.city}, ${person.address.state}`);


// ARRAY OF OBJECTS (AoO)
// const persons = [
//     {
//         name: 'User - 1', 
//         age: 40, 
//         email: 'john.doe@hotmail.com', 
//         phone: '1234567890',
//         hobbies: ['Watch TV', 'Playing soccer', 'Listening to Music'],
//         address: {
//             houseNo: 124,
//             street: 'Lane 2',
//             city: 'Hyderabad',
//             state: 'Telangana',
//             country: 'India'
//         }
//     }, 
//     {
//         name: 'User - 2', 
//         age: 40, 
//         email: 'john.doe@hotmail.com', 
//         phone: '1234567890',
//         hobbies: ['playing basketball', 'playing chess', 'playing badminton'],
//         address: {
//             houseNo: 124,
//             street: 'Lane 2',
//             city: 'Chennai',
//             state: 'Tamil Nadu',
//             country: 'India'
//         }
//     }, 
//     {
//         name: 'User - 3', 
//         age: 40, 
//         email: 'john.doe@hotmail.com', 
//         phone: '1234567890',
//         hobbies: ['singing', 'dancing', 'sleeping'],
//         address: {
//             houseNo: 124,
//             street: 'Lane 2',
//             city: 'Bangalore',
//             state: 'Karnataka',
//             country: 'India'
//         }
//     }
// ]

// // console.log(persons);
// // console.log(persons[2].hobbies[1])

// // To convert AoO into JSON
// // const jsonData = JSON.stringify(persons)
// // console.log(jsonData);

// // const jsData = JSON.parse(jsonData)
// // console.log(jsData);

// function add() {
//     let a = 100
//     let b = 200
//     let c = a + b;
//     console.log(c);
// }

// function addTwo(a ,b) {
//     if(typeof(a) === 'number' && typeof(b) === 'number') {
//         let c = a + b
//         console.log(c);
//     }
// }

// function addThree(a ,b) {
//     if(typeof(a) === 'number' && typeof(b) === 'number') {
//         let c = a + b
//         // console.log(c);
//         return c
//     }
// }

// add()
// addTwo(25, 49)

// let ans = addThree(10, 35)
// console.log(ans);


// let sub = (a, b) => {
//     if(typeof(a) === 'number' && typeof(b) === 'number') {
//         c = a - b
//         return c
//     }
// }

// let ans = sub(100, 20)
// console.log(ans)

// function pow(base, exp) {
    // return Math.pow(base, exp)
// }

// const pow = ( base, exp ) => Math.pow(base, exp)
// const pow = ( base, exp ) => typeof base === 'number' && typeof exp === 'number' ? Math.pow(base, exp) : -1

// const result = pow(20, 2)
// console.log(result);

// const add = (a, b) => {
//     c = a + b
//     console.log(c)
// }

// setTimeout(() => add(500, 200), 2000)

// const arr = [ 'Mango', 'Apple', 'Pineapple' ]
// const myObj = { fruit1: 'Some Fruit', fruit2: 'Some Other Fruit' }

// const merge = (arr, myObj) => {
//     // console.log(arr);
//     // console.log(myObj);
//     myObj.fruit1 = arr[0]
//     myObj.fruit2 = arr[1]
//     console.log(myObj);
// }

// merge(arr, myObj)

// var fun = () => {
    // var a = 100
    // var b = 200
//     console.log(a , b)
// }

// if(true) {
//     const a = 100
//     const b = 200
//     console.log(a , b)
// } else {
//     const a = 500
//     const b = 500
//     console.log(a , b)
// }
// console.log(a , b)


// for( let i=1; i <= 10; i+=1 ) {
//     console.log(i)
// }

// let j = 1
// while(j <= 5) {
//     console.log(j)
//     j+=1
// }

// PRINT A TABLE OF 8
// for(let i=8; i <= 80; i+=8) {
//     // console.log(`8 x ${i/8} = ${i}`);
//     // console.log('8 x ' + i/8 + ' = ' + i);
//     console.log(`8 x ${i/8} = ${i}`);
// }

// const square = a => a*a

// const result = square(3)
// console.log(result);

const notes = [
    {id: 1, name: 'Note - 1', body: 'Note - 1 Body', year: 1980},
    {id: 2, name: 'Note - 2', body: 'Note - 2 Body', year: 2001},
    {id: 3, name: 'Note - 3', body: 'Note - 3 Body', year: 1999},
    {id: 4, name: 'Note - 4', body: 'Note - 4 Body', year: 1997},
    {id: 5, name: 'Note - 5', body: 'Note - 5 Body', year: 1967},
    {id: 6, name: 'Note - 6', body: 'Note - 6 Body', year: 1921},
    {id: 7, name: 'Note - 7', body: 'Note - 7 Body', year: 1947},
    {id: 8, name: 'Note - 8', body: 'Note - 8 Body', year: 1937},
    {id: 9, name: 'Note - 9', body: 'Note - 9 Body', year: 1950},
    {id: 10, name: 'Note - 10', body: 'Note - 10 Body', year: 2000}
]

const ages = [12, 14, 19, 20, 25, 8, 21, 16, 71, 7, 22, 50, 42, 47, 69, 29]

const strings = ['B', 'A', 'D', 'C', 'I', 'J', 'E', 'B', 'S', 'a']

// console.log(notes)
// console.log(notes[0].body);

// for(let i = 0; i < notes.length; i+=1) {
//     console.log(notes[i])
// }

notes.forEach( (note, index) => console.log(`${note.body} - Index : ${index}`) )

// const filteredData = notes.filter( (note, index) => index%2 === 0 )
// console.log(filteredData)

const filteredNotes = notes.filter( (note, index) => note.year >= 1950 && note.year <= 1960  &&index % 2 === 0 )
console.log(filteredNotes)

const arr = notes.map( (note, index) => note.body )
console.log(arr)

// for(let i = 0; i < notes.length; i++) {
//     if(i %2 === 0) {
//         console.log(notes[i])
//     }
// }

// for(let i = 0; i < notes.length; i++) {
//     console.log(notes[i].body)
// }

// setTimeout( () => add(500, 200), 2000 )

// 1. forEach
// notes.forEach( (note, index) => index%2 !== 0 ? console.log(note) : -1)

// 2. filter
// const arr = notes.filter( note => note.id === 10 )
// console.log(arr)

// const canDrink = ages.filter(age => age === 21)
// console.log(canDrink);

// const noteBody = notes.map( note => note.body )
// console.log(noteBody)

// console.log(ages);

// const sortedAges = ages.sort( (a, b) => a - b )
// console.log(sortedAges);

const sortedAges = ages.sort( (a, b) => {
    if( a < b ) {
        return -1
    } else if(a === b) {
        return 0
    } else {
        return +1
    }
})
console.log(sortedAges)

// const sortedStrings = strings.sort( (a, b) => {
//     if( a < b ) {
//         return -1
//     } else {
//         return +1
//     }
// })

// console.log(sortedAges)
// console.log(sortedStrings);

// const sortedStrings = strings.sort( )

// console.log(sortedStrings);

const addedAges = ages.reduce( (total, age) => {return total * age}, 1 )
console.log(addedAges);