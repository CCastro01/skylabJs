// Localiza o elemento <ul> através do seu id, usando querySelector();
var lista = document.querySelector("#lista");
//criando o vetor nomes;
var nomes = [];
//localiza o elemento <input> através do seu id, usando querySelector();
var txt = document.querySelector("#text");

//função add passando um elemento texto por parâmetro
function add(texto) {
    //crianto um elemento li
    var liElement = document.createElement('li');
    //cria o elemento texto, que foi passado por parâmetro
    var textElement = document.createTextNode(texto);

//atribui para o a tag <li>, que é representada por liElement, um elemento filho textElement(adicionando o texto na linha)
    liElement.appendChild(textElement);
//adicionando um elemento filho liElement, na tag <ul>, que é representada por "lista" (adicionando a linha na lista)
    lista.appendChild(liElement);
    
}

//é a função do onclick() que está no botão da DOM
function adicionar() {
    //executa a função add, passando por parâmetro o texto que foi colocado no input
    add(txt.value);
    // limpa o campo imput
    txt.value = " ";
    
}




