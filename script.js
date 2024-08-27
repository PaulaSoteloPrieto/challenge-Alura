let texto = document.querySelector(".text_area");
let resultado = document.querySelector(".texto__resultado");
let boton = document.querySelector(".boton__copiar");
let muneco = document.querySelector(".muneco");
let mensaje = document.querySelector(".mensaje__encriptado");

texto.addEventListener('input', function() {
    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z ]/g, "");
});

function botonEncriptar() {
    let textoEncriptado = encriptar(texto.value);
    resultado.value = textoEncriptado;
    resultado.style.display = "block";
    boton.style.display = "block";
    muneco.style.display = "none";
    mensaje.style.display = "none";
    texto.value = "";
}

function botonDesencriptar() {
    let textoDesencriptado = desencriptar(texto.value);
    resultado.value = textoDesencriptado;
    muneco.style.display = "none";
    mensaje.style.display = "none";
    texto.value = "";
}

function encriptar(stringEncriptado) {
       stringEncriptado = stringEncriptado.toLowerCase();

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
       stringDesencriptado = stringDesencriptado.toLowerCase();

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;

}

function botonDesencriptar(){
    let textoEncriptado = desencriptar(texto.value)
    resultado.value = textoEncriptado
    texto.value=""; 
}

      
function copiar() {
  
    let textoCopiar = document.querySelector(".texto__resultado").value;

   
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            console.log("Texto copiado: " + textoCopiar);
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        })
        .then(()=> {
        resultado.value = "";
});
}

document.querySelector(".boton__copiar").addEventListener("click", copiar);




