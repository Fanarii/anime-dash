import displayWatchList from "../view/watchList.js";
import displayFavorite from "../view/favoriteList.js";

let watchList = [];
let favoriteList = [];

const getLocalStorage = () => {
    const localFavorite = localStorage.getItem('favorite');
    const localWatchList = localStorage.getItem('watchList');

    watchList = JSON.parse(localWatchList) || [];
    favoriteList = JSON.parse(localFavorite) || [];

    displayWatchList();
    displayFavorite();
};

const updateLocalStorage = () => {
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
    localStorage.setItem('watchList', JSON.stringify(watchList));
    displayWatchList()
    displayFavorite()
};

export { getLocalStorage, updateLocalStorage, watchList, favoriteList }