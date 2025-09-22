import * as css from "../css/style.css";

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🔒';
});

// Переключение темы
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Обработка формы
const form = document.querySelector('.auth-form');
// В файле main.js
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Перенаправление на dashboard.html
    window.location.href = 'dashboard.html';
});
