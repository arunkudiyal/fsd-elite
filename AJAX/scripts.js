// Step 1 - Create an Object of XMLHttpRequest --> JavaSCript 
const xhr = new XMLHttpRequest()
console.log(xhr)

const url = `https://api.github.com/users`

// Step 2 - Open the portal of communication b/w client and the server
// xhr.open('HTTPMethod', url)
xhr.open('GET', url)

// Step 3 - Establish the connection with the server
xhr.onreadystatechange = () => {
    // Step 4 - Check for readyState & status
    if(xhr.readyState === 4 && xhr.status === 200) {
        const stringResponse = xhr.responseText
        const response = JSON.parse(stringResponse)
        console.log(response)

        const myDiv = document.querySelector('#my-div')
        for(let i=0 ; i < response.length; i++) {
            myDiv.innerHTML += `
            <div class="row">
                <div class="col-xs-6">
                    <img src=${response[i].avatar_url} />
                </div>
                <div class="col-xs-6">
                    <h3> Username - <small> ${response[i].login} </small> </h3>
                    <br />
                    <button class="btn btn-primary">Visit Profile</button>
                </div>
            </div>
            <hr /> <hr />
        `
        }  
    }
}

// Step 5 - Send the request
xhr.send()