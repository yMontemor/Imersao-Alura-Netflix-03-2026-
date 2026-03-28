import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
    // Busca os dados que salvamos lá no index
    const savedImg = localStorage.getItem('profileImg');
    const savedName = localStorage.getItem('profileName');

    // Se existir uma imagem salva, a gente substitui no HTML
    if (savedImg) {
        // Pega a imagem de perfil do canto superior direito do catálogo
        const profileIcon = document.querySelector('.profile-icon');
        
        if (profileIcon) {
            profileIcon.src = savedImg; // Troca a imagem
            profileIcon.alt = `Perfil de ${savedName}`; // Atualiza o texto alternativo por acessibilidade
        }
    }
});
});
