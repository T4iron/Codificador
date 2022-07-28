const textoCripto = document.querySelector('.texto-inicio');
const textoDescripto = document.querySelector('.mensagem')
const btnCriptografar = document.querySelector('.encriptar');
const btnDescriptografar = document.querySelector('.descriptografar');
const btnCopiar = document.querySelector('.copiar');

    
btnCriptografar.addEventListener('click', criptografar);
btnDescriptografar.addEventListener('click', descriptografar);
btnCopiar.addEventListener('click', copiar);



function criptografar () {
   let cripto = remover_acentos_espaco(textoCripto.value.toLowerCase());

    const criptografia = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    btnCopiar.classList.remove('copiar-ativo');
    

    for (let i = 0; i < criptografia.length; i++) {

        cripto = cripto.replaceAll(criptografia[i][0] , criptografia[i][1]);

    }

    textoDescripto.textContent = cripto;

    if (textoDescripto.value != "") {

        document.querySelector('.msg-texto').classList.add('txt-msg');
        
        textoDescripto.classList.add('mensagem-limpa');

        textoDescripto.placeholder = "";

        btnCopiar.classList.add('copiar-ativo');
    }
    
}

function descriptografar () {

    let cripto = textoCripto.value;

    btnCopiar.classList.remove('copiar-ativo');

    const criptografia = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    

    for (let i = 0; i < criptografia.length; i++) {

        cripto = cripto.replaceAll(criptografia[i][1] , criptografia[i][0]);
    }

    btnCopiar.classList.add('copiar-ativo');

    document.querySelector('.msg-texto').classList.add('txt-msg');
    textoDescripto.classList.add('mensagem-limpa');
    textoDescripto.placeholder = "Nenhuma mensagem encontrada";

    textoDescripto.textContent = cripto;
}

function remover_acentos_espaco(str) {
    return str.normalize("NFD").replace(/[^ a-zA-Zs]/g, "");
}

function copiar () {
    btnCopiar.classList.remove('copiar-ativo');
    textoDescripto.select();
    document.execCommand('copy');

    textoCripto.value = '';
    textoDescripto.textContent = '';
    document.querySelector('.msg-texto').classList.remove('txt-msg');
    textoDescripto.classList.remove('mensagem-limpa');
    textoDescripto.placeholder = "Nenhuma mensagem encontrada";

}




















