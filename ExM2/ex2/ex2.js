let button = document.querySelector("#btn");

function cria(){
    let div = document.createElement("div");
    div.setAttribute("id", "box"); // setando um atributo em div (criando um id e dando o nome box)
    let criaCaixa = document.querySelector("#caixa"); 
    criaCaixa.appendChild(div); // adicionando o elemento div dentro de outro elemento criaCaixa

    div.setAttribute("onmouseover","getRandomColor()");//setando um novo atributo na div(caixa)...Esse atributo 
                                                       //será usado na função getRandomColor
}

function getRandomColor() {

    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    document.querySelector("#box").style.backgroundColor = color;
    
   }
   