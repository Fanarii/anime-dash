import { setIsOpen, getIsOpen } from "../index.js";
import { updateLocalStorage, favoriteList, watchList } from "../data/localStorage.js";

const openModal = (anime) => {
    if (!getIsOpen()) {
        const modal = document.createElement('div');
        modal.classList = 'modal';

        modal.innerHTML = `
            <div class="modal-wrapper">
                <div class="modal-content">
                    <h3>${anime.attributes.titles.en}</h3>
                    <img src='${anime.attributes.posterImage.medium}' alt='img'>
                    <div class="attributes">
                        <p>Show type: ${anime.attributes.showType}</p>
                        <p>Rating: ${anime.attributes.averageRating}</p>
                        <p>${anime.attributes.episodeCount} eps.</p>
                    </div>
                    <div class="buttons">
                        <button class="watchlist-button">+ Watchlist</button>
                        <button id="closeButton">Close</button>
                        <button class="favorite-button">+ Favorite</button>
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.watchlist-button').addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.remove();
                setIsOpen(false);
            }

            anime.isWatched = false

            watchList.push(anime);
            updateLocalStorage();
        });

        modal.querySelector('.favorite-button').addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.remove();
                setIsOpen(false);
            }

            favoriteList.push(anime);
            updateLocalStorage();
        });

        document.body.appendChild(modal);

        document.getElementById('closeButton').addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.remove();
                setIsOpen(false);
            }
        });

        setIsOpen(true);
    }
};

export default openModal;