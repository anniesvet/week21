let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if(validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if(validity.patternMismatch) {
        errors.push('Неверный формат заполнения поля ' + input.placeholder);
    }
    
    // let element = document.getElementById("agreed");    

    // if (element.checked) {
    //     console.log('Принято');
    // } else errors.push('Необходимо ознакомиться и принять условия Пользовательского соглашения');
}

    btn.onclick = function (event) {

        errors = [];
        let inputs = document.querySelectorAll("input");

        for(let input of inputs) {
            checkValidity(input);
        }

        event.preventDefault();

        let user = {
            login: document.getElementById("login").value,
            password: document.getElementById("pass").value
        }
        console.log(user);


    document.getElementById("errorsInfo").innerHTML = errors.join(', <br>');

    fetch("https://httpbin.org/post",
    {
        method:'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}


//ЭТО СТАРОЕ function requiredInfo() {

//     let name = document.getElementById('name').value;

//     if(document.getElementById('name').value.length < 2) {
//         document.getElementById('noname').innerHTML = "Ошибка! Введите ваше имя";
//         return false;
//     } else if(document.getElementById('surname').value.length < 2) {
//         document.getElementById('nosurname').innerHTML = "Ошибка! Введите вашу фамилию";
//         return false;
//     } else if(document.getElementById('pass').value.length < 3) {
//         document.getElementById('nopass').innerHTML = "Ненадежный пароль! Введите не менее 5-ти символов";
//         return false;
//     } else if(document.getElementById('number').value.length < 12) {
//         document.getElementById('nonumber').innerHTML = "Введите ваш номер! Формат: +79ххххххххх";
//         return false;
//     } else if(document.getElementById('login').value.length < 3) {
//         document.getElementById('nologin').innerHTML = "Логин должен быть не менее 4-х символов";
//         return false;
//     } else alert('Привет!' + ' ' + name);
// }

