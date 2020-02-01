let button = document.querySelector("#btn");

function cria(){
    let div = document.createElement("div");
    div.setAttribute("id", "box"); // setando um atributo em div (criando um id e dando o nome box)
    let criaCaixa = document.querySelector("#caixa"); 
    criaCaixa.appendChild(div); // adicionando o elemento div dentro de outro elemento criaCaixa


}