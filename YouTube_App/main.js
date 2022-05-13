document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault()
    
    const query = document.querySelector('#text').value
    const api_key = `AIzaSyBL7tmoBcFl44584VA4eC7RrVu_izPyyLM`
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${api_key}`

    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            // Create Elemets and Put in the HTML
            let output = ''
            output += `
                <div class="row">
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[0].id.videoId}">
                            <img style="width: 100%" src=${response.items[0].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[0].snippet.title}</h3>
                        <small>${response.items[0].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[1].id.videoId}">
                            <img style="width: 100%" src=${response.items[1].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[1].snippet.title}</h3>
                        <small>${response.items[1].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[2].id.videoId}">
                            <img style="width: 100%" src=${response.items[2].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[2].snippet.title}</h3>
                        <small>${response.items[2].snippet.description}</small>
                    </div>
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[3].id.videoId}">
                            <img style="width: 100%" src=${response.items[3].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[3].snippet.title}</h3>
                        <small>${response.items[3].snippet.description}</small>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-3">
                        <a href="https://www.youtube.com/watch?v=${response.items[4].id.videoId}">
                            <img style="width: 100%" src=${response.items[4].snippet.thumbnails.high.url} />
                        </a>
                        <h3>${response.items[4].snippet.title}</h3>
                        <small>${response.items[4].snippet.description}</small>
                    </div>
                </div>
            `

            document.querySelector('#my-container').innerHTML += output
        }
    }

    xhr.send()
})