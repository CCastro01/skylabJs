axios.get('https://api.github.com/users/ccastro01')
    .then(function(response) {
        console.log(response.data.login); //EX: chamando apenas o login
        console.log(response);
    })
    .catch(function(reject) {
        console.warn(error);
    });
