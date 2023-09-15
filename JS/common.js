const a = window.matchMedia('(prefers-color-scheme: dark)');
const b = document.querySelector('html');

if (a.matches) {
    b.setAttribute('data-theme', 'dark');
} else {
    b.setAttribute('data-theme', 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    if (a.matches) {
        b.setAttribute('data-theme', 'dark');
    } else {
        b.setAttribute('data-theme', 'light');
    }
});
