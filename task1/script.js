function onSearch () {
    let getGiphy = document.getElementById("giphySearch").value;

    fetch ('https://api.giphy.com/v1/gifs/search?api_key=4lx65c3QTkwqwsVrRHOshsHUC698iiES&q=' + getGiphy + '&limit=5&offset=0&rating=g&lang=ru')
        .then(response => response.json())
        .then(giphy => {
            document.getElementById("place").src = giphy.url;
            document.getElementById("qw").innerText = giphy.title;
        })
        .catch(error => console.log(error));
}