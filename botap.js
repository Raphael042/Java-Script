let botao = document.getElementById('botao');

botao.addEventListener(`click`, function clicar (){

    const p = document.getElementById('resposta')
    p.innerHTML += `Clicou! <br>`;
}); // adicionar um evento de clique ao botão.
    
