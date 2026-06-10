// 1. Função do botão "Saiba Mais" (Exibir curiosidades ocultas de forma suave)
function abrirCuriosidade(idCuriosidade) {
    const caixaCuriosidade = document.getElementById(idCuriosidade);
    
    // Alterna a classe ativa que controla a altura máxima via CSS
    caixaCuriosidade.classList.toggle('ativa');
    
    // Altera o texto do botão para dar retorno ao usuário
    const botao = caixaCuriosidade.previousElementSibling;
    if (caixaCuriosidade.classList.contains('ativa')) {
        botao.textContent = "Fechar";
    } else {
        botao.textContent = "Saiba Mais";
    }
}

// 2. Animação ao rolar a página (Efeito "Fade-in" nos elementos ao scroll)
const elementosParaAnimar = document.querySelectorAll('.anima-entrada');

const checarScroll = () => {
    elementosParaAnimar.forEach(elemento => {
        const elementoTopo = elemento.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight * 0.85; // Dispara quando o item está a 85% da tela
        
        if (elementoTopo < alturaJanela) {
            elemento.classList.add('visivel');
        }
    });
};

// Executa a checagem sempre que o usuário rolar a página
window.addEventListener('scroll', checarScroll);

// Executa uma vez no início caso haja elementos visíveis logo de cara
window.addEventListener('load', checarScroll);
