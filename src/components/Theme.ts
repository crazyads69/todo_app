export function setLightTheme() {
    localStorage.setItem('theme', 'light');
}

export function setDarkTheme() {
    localStorage.setItem('theme', 'dark');
}

export function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}
