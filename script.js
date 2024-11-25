let pontosJogador1 = 0;
let pontosJogador2 = 0;
let tempo = 15;
let intervalo;

function iniciarJogo() {
    intervalo = setInterval(contarTempo, 1000);
}

function contarTempo() {
    tempo--;
    document.getElementById('tempo').textContent = tempo;
    if (tempo === 0) {
        clearInterval(intervalo);
        finalizarJogo();
    }
}

function clicarJogador1() {
    pontosJogador1++;
    document.getElementById('pontos-jogador-1').textContent = `Pontos: ${pontosJogador1}`;
}

function clicarJogador2() {
    pontosJogador2++;
    document.getElementById('pontos-jogador-2').textContent = `Pontos: ${pontosJogador2}`;
}

document.getElementById('botao-iniciar').addEventListener('click', iniciarJogo);

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        clicarJogador1();
        
    }
    else if (e.key === 'A') {
        clicarJogador1();
        
    }
     else if (e.key === 'l') {
        clicarJogador2();
    }
    else if (e.key === 'L') {
        clicarJogador2();
    }
});

function finalizarJogo() {
    alert(`Jogo finalizado! Jogador 1: ${pontosJogador1} pontos, Jogador 2: ${pontosJogador2} pontos`);
    if (pontosJogador1 > pontosJogador2) {
        alert('Jogador 1 venceu!');
    } else if (pontosJogador2 > pontosJogador1) {
        alert('Jogador 2 venceu!');
    } else {
        alert('Empate!');
    }
}