function toggleTheme() {
    document.body.classList.toggle('light');

    const theme = document.getElementById('value');

    if (theme.textContent === 'DARK MODE') {
        theme.textContent = 'LIGHT MODE';
    } else {
        theme.textContent = 'DARK MODE';
    }

}

function clickMenu() {
    if(items.style.display == 'block') {
        items.style.display = 'none';
        value.style.display = 'block';
    } else {
        items.style.display = 'block';
        value.style.display = 'none';
    }

}