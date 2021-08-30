import data from './menu.json'
import refs from './js/refs.js'
import './styles.css'
import template from './templates/menu-template.handlebars'
import './images/sprite.svg'
import './js/listeners.js'


const markup = template(data);

refs.menu.innerHTML = markup;



