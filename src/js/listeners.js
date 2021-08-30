import refs from "./refs.js"

switcherF()

refs.switcher.addEventListener('click', (event) => {
    refs.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', refs.body.classList)
    localStorage.setItem('checked', event.target.checked)    
})

function switcherF() {
let theme = localStorage.getItem('theme')
let checked = localStorage.getItem('checked')
if(theme) {
    refs.body.classList.add(theme)
    refs.switcher.checked = checked;
}
}