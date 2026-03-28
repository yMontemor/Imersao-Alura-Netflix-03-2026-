document.addEventListener('DOMContentLoaded', () => {
    // Busca os links <a> que estão dentro das <li> com classe 'profile'
    const profileLinks = document.querySelectorAll('.profile a');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // 1. Pausa o redirecionamento imediato para dar tempo de salvar os dados
            event.preventDefault();

            // 2. Encontra a imagem e o nome dentro do link que foi clicado
            const imgEl = link.querySelector('img');
            const nomeEl = link.querySelector('figcaption'); // Seu HTML usa figcaption para o nome

            if (imgEl && nomeEl) {
                // Pegando 'imgEl.src' o navegador já entrega a URL completa, evitando erro de caminho!
                const imgSrc = imgEl.src; 
                const nome = nomeEl.textContent.trim();

                try {
                    // 3. Salva no localStorage com os nomes das chaves que você definiu
                    localStorage.setItem('perfilAtivoNome', nome);
                    localStorage.setItem('perfilAtivoImagem', imgSrc);
                } catch (e) {
                    // Silenciar erros de localStorage (ex: navegação anônima muito restrita)
                    console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
                }

                // 4. Agora sim, manda o navegador ir para o catálogo
                window.location.href = link.href;
            }
        });
    });
});