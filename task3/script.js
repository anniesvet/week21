btn.onclick = function (event) {

    event.preventDefault();

fetch("https://httpbin.org/post",
{
    method:'POST',
    body: new FormData(formElem),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
})
.then(response => response.json())
.then(user => {
    console.log(user);
})
.catch(error => console.log(error));
}
