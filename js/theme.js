// ========================================
// FUNCIONALIDADE DE DARK/LIGHT MODE
// ========================================

// Elementos do DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou padrão (dark)
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

// Função para alternar o tema
function toggleTheme() {
    body.classList.toggle('light-mode');

    // Salva no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Adiciona o event listener ao botão
themeToggleBtn.addEventListener('click', toggleTheme);
