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

            res.data.forEach(el => {
                console.log(el.title)
                console.log(el.images.original.url)
                
                let name = document.querySelectorAll('.name'); 
                name.innerHTML += el.title

                let images = document.querySelectorAll('.place');
                images.src += el.images.original.url
            });

            
            // document.getElementById('name1').innerHTML = res.data[0].title
            // document.getElementById('place1').src = res.data[0].images.original.url

            // document.getElementById('name2').innerHTML = res.data[1].title
            // document.getElementById('place2').src = res.data[1].images.original.url

            // document.getElementById('name3').innerHTML = res.data[2].title
            // document.getElementById('place3').src = res.data[2].images.original.url

            // document.getElementById('name4').innerHTML = res.data[3].title
            // document.getElementById('place4').src = res.data[3].images.original.url

            // document.getElementById('name5').innerHTML = res.data[4].title
            // document.getElementById('place5').src = res.data[4].images.original.url
        })
        .catch(error => console.log(error.message));
}

