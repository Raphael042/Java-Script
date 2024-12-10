let Pontos = 0;

document.querySelector('.adicionar').addEventListener('click', function(e){
    e.preventDefault();
    Pontos += 1;
    document.querySelector('.Pontos').textContent = Pontos;
});

document.querySelector('.remover').addEventListener('click', function(e){
    e.preventDefault();
    Pontos -= 1;
    document.querySelector('.Pontos').textContent = Pontos;
});

document.querySelector('.reset').addEventListener('click', function(e){
    e.preventDefault();
    Pontos = 0;
    document.querySelector('.Pontos').textContent = Pontos;
});