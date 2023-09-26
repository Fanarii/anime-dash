import { animeData } from "../data/getAllData.js";
import initialDisplay from "./initialDisplay.js";
import openModal from "./openModal.js";

const filterData = (inputValue) => {
    const FindAnime = document.querySelector('find-anime');
    const initialLabel = FindAnime.shadowRoot.querySelector('.wrapper-label');
    const wrapper = FindAnime.shadowRoot.querySelector('.card-wrapper');
    wrapper.innerHTML = '';
    initialLabel.style.display = 'none';

    if (!inputValue) {
        initialDisplay();
    } else {
        const inputLower = inputValue.toLowerCase();

        animeData.forEach((anime) => {
            if (anime.attributes && anime.attributes.canonicalTitle && anime.attributes.posterImage.medium) {
                const title = anime.attributes.canonicalTitle.toLowerCase();

                if (title.includes(inputLower)) {
                    const div = document.createElement('div');
                    div.classList = 'card';

                    div.innerHTML = `
                        <div class="card">
                            <img src="${anime.attributes.posterImage.medium}" alt="gambar">
                            <p class="title">${anime.attributes.canonicalTitle}</p>
                            <p>(${anime.attributes.showType})</p>
                            <p class="rating">Rating: ${anime.attributes.averageRating}</p>
                        </div>
                    `;

                    div.addEventListener('click', () => {
                        openModal(anime);
                    });

                    wrapper.appendChild(div);
                }
            }
        });
    }
};

export default filterData;