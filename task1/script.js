function onSearch () {
    let getGiphy = document.getElementById("giphySearch").value;

    fetch ('https://api.giphy.com/v1/gifs/search?api_key=4lx65c3QTkwqwsVrRHOshsHUC698iiES&q=' + getGiphy + '&limit=5&offset=0&rating=g&lang=ru')
        .then(response => response.json())
        .then(data => {
            document.getElementById("place").src = data[0].url;
        })
        .catch(error => console.log(error));
}

