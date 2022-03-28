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

            let catContent = "";
            for (let i = 0; i< res.data.length; i++ ) {
                catContent += `<div class ='cats'>
                <h5>${res.data[i].title}</h5>
                <img src=${res.data[i].images.original.url}>
                </div>`
            }

            document.getElementById("contentContainer").innerHTML = catContent;
            })
        .catch(error => console.log(error.message));
}
