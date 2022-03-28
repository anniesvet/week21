function onSearch () {
    let getGiphy = document.getElementById("giphySearch").value;

    fetch ('https://api.giphy.com/v1/gifs/search?api_key=4lx65c3QTkwqwsVrRHOshsHUC698iiES&q=' + getGiphy + '&limit=5&offset=0&rating=g&lang=ru')
        .then((response) => {
            if(!response.ok) {
                throw new Error (alert('Произошла ошибка. Повторите запрос'))
            } 

            return response.json()})
        .then(res => {
            console.log(res.data)

            let images = document.getElementById('images');

            let str = ' ';
            for (let i = 0; i< res.data.length; i++  ) {
            if (res.data[i]!==undefined) {
                str +=res.data[i].title + '<br>' + res.data[i].images.original.url + '<br>';
            } 
            }

            images.innerHTML = str;
            })
        .catch(error => console.log(error.message));
}
