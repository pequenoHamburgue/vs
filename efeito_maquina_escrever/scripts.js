function maquina_escrever(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(
            function(){ element.innerHTML += letra}
        
            ,75 * i)
    })
    console.log(TextoArray)
}

const titulo = document.querySelector("h1")
console.log(titulo)
maquina_escrever(titulo)
