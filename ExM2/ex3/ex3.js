// Localiza o elemento <ul> através do seu id, usando querySelector();
var lista = document.querySelector("#lista");
//criando o vetor nomes;
var nomes = ["diego", "Gabriel", "Lucas"];

    
for (let i in nomes) {
    // Cria um novo elemento <li> no documento.
    let li1 = document.createElement("li");
    // Informa o texto do novo elemento <li>. (no caso, é uma posição do vetor)
    li1.textContent = nomes[i];
    // Insere o novo elemento <li> na lista <ul>.
    lista.appendChild(li1);
}



