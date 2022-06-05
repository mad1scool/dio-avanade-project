const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')
const footer = document.getElementById('foo')
const body = document.getElementById('boo')


function darkMode() {
    h1.classList.toggle('dark-mode')
    button.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    
    if (h1.classList.contains('dark-mode')) {
        h1.innerText = "Dark Mode ON"
    } else {
        h1.innerText = "Light Mode ON"
    }

    if (button.classList.contains('dark-mode')) {
        button.innerText = "Light Mode"
    } else {
        button.innerText = "Dark Mode"
    }
}

button.addEventListener('click', darkMode)