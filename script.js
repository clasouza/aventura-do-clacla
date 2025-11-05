document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximoId = button.getAttribute('data-proximo');
        document.querySelectorAll('.passo').forEach(p => p.classList.remove('ativo'));
        document.getElementById(`passo-${proximoId}`).classList.add('ativo');
    });
});
