console.dir(document)
// console.log(document.all);
// console.log(document.all[10])
document.all[10].textContent = 'Welcome to DOM'

// Identifier Methods
// console.log( document.getElementById('header-title') )

// console.log( document.getElementById('header-title') )
// const myDiv = document.getElementById('my-id')
// console.log(myDiv)

const listItems = document.getElementsByClassName('list-group-item')
console.log(listItems);

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