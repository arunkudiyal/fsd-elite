// console.dir(document)
// console.log(document.all);
// console.log(document.all[10])
document.all[10].textContent = 'Welcome to DOM'

// Identifier Methods
// console.log( document.getElementById('header-title') )

// console.log( document.getElementById('header-title') )
// const myDiv = document.getElementById('my-id')
// console.log(myDiv)

// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems);

// for(let i=0; i < listItems.length; i++) {
//     if(listItems[i].textContent === 'My List Item') {
//         listItems[i].style.backgroundColor = 'black'
//         listItems[i].style.color = 'white'
//     }
// }

// for(let i=0; i < listItems.length; i++) {
//     i%2 === 0 ? listItems[i].style.color = 'red' : listItems[i].style.color = 'black'
// }

// for(let i=0; i < listItems.length; i++) {
//     i%2 === 0 ? listItems[i].style.backgroundColor = 'grey' : null
// }

// const list = document.getElementsByTagName('ul')
// console.log(list);

// list[0].style.border = '2px solid red'

// const list = document.querySelectorAll('.list-group-item')
// console.log(list)

// setTimeout( () => {
//     document.querySelector('#header-title').textContent = 'Welcome to the App...'
// }, 3000 )

// setTimeout( () => {
//     document.querySelector('#header-title').innerHTML = `<h3>Welocme...</h3>`
// }, 3000 )

// document.querySelector('#header-title').className = 'my-class-name'

// document.querySelector('#header-title').style.borderBottom = '2px solid red'

// const buttonOne = document.getElementById('btn')

// buttonOne.addEventListener('dblclick', () => console.log('Button was clicked'))

// document.querySelector('#text-input').addEventListener('focus', () => console.log('FOCUSED!'))

// document.querySelector('#text-input').addEventListener('blur', () => console.log('BLURRED!'))

// document.querySelector('#text-input').addEventListener('copy', () => console.log('COPIED!'))

// document.querySelector('#text-input').addEventListener('cut', () => console.log('CUT!'))

// document.querySelector('#text-input').addEventListener('paste', () => console.log('PASTED!'))

// document.querySelector('#text-input').addEventListener('keypress', (event) => console.log(event)

// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// const listItem = document.querySelectorAll('.list-group-item')
// console.log(listItem)

// EVENTS PARAMETERS

// document.querySelector('#submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e)
//     console.log( document.querySelector('#text-input').value )
// })

// document.querySelector('#container').addEventListener( 'mouseenter', 
// (e) => {
//         console.log(e)
//         console.log(e.offsetX, e.offsetY)
//         document.querySelector('#container').style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 100)`
//         // document.querySelector('#container').style.backgroundColor = `rgb(100, 200, 300)`
//     }
// )

// document.querySelector('#container').addEventListener( 'mouseleave', 
// (e) => {
//     document.querySelector('#container').style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 100)`
// } )


// DOM TRAVERSALS

// How to access the parent of any element
// const header = document.querySelector('#main-header')

// const heading = document.querySelector('#header-title')

// console.log( header.parentElement )

// console.log(heading.parentElement)

// How to access the children of any element
// const mainDiv = document.querySelector('#main')
// console.log(mainDiv.children)

// const ul = document.querySelector('ul')
// console.log( ul.firstElementChild )
// console.log( ul.lastElementChild )

// How to access the siblings of any element
// const firstLi = document.querySelector('#first-li')
// console.log( firstLi.nextSibling ) -- DONOT USE - RETURNS TEXT

// const firstLi = document.querySelector('#first-li')
// console.log( firstLi.nextElementSibling )

// const secondLi = document.querySelector('#second-li')
// console.log( secondLi.previousElementSibling )

// console.log( firstLi.previousElementSibling )

// console.log( document.querySelector('#seventh-li').nextElementSibling )

// createElement('nameOfTheElement')

// const myLi = document.createElement('li')
// myLi.textContent = 'Item 8'
// myLi.setAttribute('class', 'list-group-item')
// myLi.setAttribute('id', 'eight-li')

// // Add the li to the ul
// document.querySelector('#items').appendChild(myLi)

// console.log( myLi )


// ACCESS & MANIPULATE DOM

// Accessing the value of the button
const submit = document.querySelector('#submitBtn')

// Add the click listner which user clicks when he's ready to add an Item
submit.addEventListener('click', e => {
    // Preventing the default behaviour of the submit button to take the form input to the action URL
    e.preventDefault()
    // Getting the typed value in the input type text
    const text = document.querySelector('#text-input').value
    // Creating an li in which the text value could be appended
    const newLi = document.createElement('li')
    // Adding the CSS style class as same as the other li
    newLi.setAttribute('class', 'list-group-item')
    // Appending the text value to the created li
    newLi.textContent = text
    // Appending the created li to the ul in DOM
    document.querySelector('ul').appendChild(newLi)
})

// console.dir(document)

// document.querySelector('#header-title').addEventListener('click', () => console.log('CLICK'))

// document.querySelector('#text-input').addEventListener('keydown', (e) => console.log(e))

console.log(document.querySelector('#header-title').parentElement.parentElement)

console.log(document.querySelector('#main').children[1].firstElementChild)


document.querySelector('li').addEventListener('click', () => {
    document.querySelector('#items').parentElement.style.backgroundColor = 'black'
    document.querySelector('#items').parentElement.style.color = 'white'
})