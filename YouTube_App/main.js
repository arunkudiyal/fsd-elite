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
            response.items.forEach(item => {
                output += `
                    <div class="cont-item">
                        <a href="https://www.youtube.com/watch?v=${item.id.videoId}">
                            <img style="width: 100%" src=${item.snippet.thumbnails.high.url} />
                        </a>
                        <h3>${item.snippet.title}</h3>
                        <small>${item.snippet.description}</small>
                    </div>
                `
            })
            
            document.querySelector('#cont').innerHTML += output
        }
    }
    xhr.send()
})