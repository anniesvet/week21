fetch('https://api.github.com/repos/itgirlschool/frontend/commits')
    .then(response => response.json())
    .then(commits => {

    console.log(commits)
    // alert(commits[0].author.login);
    })

