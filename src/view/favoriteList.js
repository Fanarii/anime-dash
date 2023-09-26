import { favoriteList } from "../data/localStorage";
import { updateLocalStorage } from "../data/localStorage";

const displayFavorite = () => {
    const tbody = document.getElementById('tbodyFavorite');

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    let number = 1

    favoriteList.forEach((anime) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td class="td-no">${number}</td>
            <td class="td-title">
                <img src="${anime.attributes.posterImage.medium}"
                    alt="img">
                    <div class="title-text">
                        <p class="title">${anime.attributes.canonicalTitle}</p>
                        <p>(${anime.attributes.showType})</p>
                        <p class="episode">${anime.attributes.episodeCount} eps.</p>
                    </div>
            </td>
            <td class="td-rating">${anime.attributes.averageRating}</td>
            <td class="actions">
                <button class="action-button delete">Hapus</button>
            </td>
        `;

        tr.querySelector('.delete').addEventListener('click', () => {
            deleteFavorite(anime)
        })

        tbody.appendChild(tr);

        number++
    })
};

const deleteFavorite = (anime) => {
    const index = favoriteList.indexOf(anime);

    if (index !== -1) {
        favoriteList.splice(index, 1);
    }

    updateLocalStorage()
}

export default displayFavorite;