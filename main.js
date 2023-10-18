const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = "O formulario é valido, <b>Campo B</b> é maior que <b>Campo A</b>.";
    const mensagemErro = "O formulario é invalido, <b>Campo B</b> é menor que <b>Campo A</b>.";
    
    if (parseInt(campoA.value)<parseInt(campoB.value)) {
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemSucesso.style.background =  '#27ae60';
    } else {
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemErro;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemSucesso.style.background = 'red';

    }
    
})

