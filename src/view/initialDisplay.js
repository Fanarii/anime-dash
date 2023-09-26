import { getInitialData, initialData } from "../data/getInitialData.js";
import openModal from "./openModal.js";

const initialDisplay = () => {
    const FindAnime = document.querySelector('find-anime');
    const initialLabel = FindAnime.shadowRoot.querySelector('.wrapper-label');
    initialLabel.style.display = 'flex';

    if (!initialData.length) {
        getInitialData();
    }

    const wrapper = FindAnime.shadowRoot.querySelector('.card-wrapper');
    wrapper.innerHTML = '';

    initialData.forEach((anime) => {
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
    });
};

export default initialDisplay;