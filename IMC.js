let calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(e){
    e.preventDefault(); //Previnir o envio do formulario
    //Pegar os valores dos inputs
    let Altura = parseFloat(document.getElementById('Altura').value);
    let Peso = parseFloat(document.getElementById('Peso').value);

    //Verificar se os valores são validos
    if (isNaN(Altura) || isNaN(Peso)) {
        document.getElementById('resposta').textContent = "Por favor, digite um valor válido.";
    } else {
        let imc = Peso / (Altura * Altura);
        document.getElementById('resposta').textContent = "O seu IMC é " + imc;
    }
});