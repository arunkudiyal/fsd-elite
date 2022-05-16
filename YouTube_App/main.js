document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault()
    
    const query = document.querySelector('#text').value
    const api_key = `AIzaSyBL7tmoBcFl44584VA4eC7RrVu_izPyyLM`
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${api_key}&maxResults=100`

    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            // Create Elemets and Put in the HTML
            let output = ''
            for(let i=0; i < 48; i+=4) {
                output += `
                <div class="row">
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}">
                            <img style="width: 100%" src=${response.items[i].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[i].snippet.title}</h3>
                        <small>${response.items[i].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[i+1].id.videoId}">
                            <img style="width: 100%" src=${response.items[i+1].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[i+1].snippet.title}</h3>
                        <small>${response.items[i+1].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[i+2].id.videoId}">
                            <img style="width: 100%" src=${response.items[i+2].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[i+2].snippet.title}</h3>
                        <small>${response.items[i+2].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[i+3].id.videoId}">
                            <img style="width: 100%" src=${response.items[i+3].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[i+3].snippet.title}</h3>
                        <small>${response.items[i+3].snippet.description}</small>
                    </div>
                </div>
            `
            }
            
            document.querySelector('#my-container').innerHTML += output
        }
    }

    xhr.send()
})