import './styles/style.css';
import './components/nav-bar.js'
import './components/foot-bar.js'
import './components/find-anime.js'


import { getAllData } from './data/getAllData.js'
import { getInitialData } from './data/getInitialData.js'
import { getLocalStorage } from './data/localStorage.js';
import filterData from './view/filterData.js';

document.addEventListener('DOMContentLoaded', () => {
    const FindAnime = document.querySelector('find-anime');
    const searchInput = FindAnime.shadowRoot.querySelector('.search-input');

    searchInput.addEventListener('keyup', () => {
        filterData(searchInput.value);
    });

    getLocalStorage();
    getInitialData();
    getAllData();
});

let isOpen = false;

const getIsOpen = () => isOpen;
const setIsOpen = (value) => {
    isOpen = value;
};

export { setIsOpen, getIsOpen }