const checked = document.querySelector('#check').checked

const checkStatus = (status) => {
    console.log(status)
    if( status ) {
         document.querySelector('#btn1').removeAttribute('disabled')
    } else {
        document.querySelector('#btn1').setAttribute('disabled', 'disabled')
    }
}

document.querySelector('#check').addEventListener( 'click', 
() => checkStatus( document.querySelector('#check').checked) )

console.log(document.querySelector('#btn1'))

document.querySelector('#btn1').addEventListener('click', e => {
    e.preventDefault()
    
    const firstName = document.querySelector('#first-name').value
    const lastName = document.querySelector('#last-name').value
    const dob = document.querySelector('#dob').value
    const highestQualif = document.querySelector('#highest-qualif').value
    const gender = document.querySelector('#gender').value
    const checked = document.querySelector('#check').checked

    const response = {firstName, lastName, dob, highestQualif, gender, checked}

    console.log(response)
})