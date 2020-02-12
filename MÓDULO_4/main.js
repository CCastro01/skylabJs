//Promisse é um objeto usado para processamento assícrono. 
var minhaPromisse = function() {
    return new Promise(function (resolve, reject) {
        //o resolve é a função que será utilizada na Primisse quando o resultado obtido for de sucesso
        //o reject vai ser retornado quando o resultado obtido na Promisse não for de sucesso
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/ccastro01');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    
                }else{
                    reject('Erro na requisição');
                }
            }
        }
        
    });
    
}
minhaPromisse()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(reject) {
        console.warn(error);
    });
