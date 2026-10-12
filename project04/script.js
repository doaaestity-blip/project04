const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

themeToggleBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let activeTheme = htmlElement.getAttribute('data-theme');
    let newTheme = activeTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);

    updateToggleIcon(newTheme);
});


function updateToggleIcon(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerHTML = '<span class="icon">✨</span>';
    } else {
        themeToggleBtn.innerHTML = '<span class="icon">🌙</span>';
    }
}
