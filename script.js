function inserirNome(){
   let nomeUsuario = prompt("Qual seu nome");
   let elemento = document.querySelector("#Nome de usurio");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "Python","C++"]

console.log (linguagens [0])

console.log (linguagens [1])

console.log (linguagens [2])