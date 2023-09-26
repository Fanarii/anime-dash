import { watchList, updateLocalStorage } from "../data/localStorage";

const displayWatchList = () => {
    const tbodyWatched = document.getElementById('tbodyWatched');
    const tbodyUnwatched = document.getElementById('tbodyUnwatched');

    while (tbodyWatched.firstChild) {
        tbodyWatched.removeChild(tbodyWatched.firstChild);
    }
    while (tbodyUnwatched.firstChild) {
        tbodyUnwatched.removeChild(tbodyUnwatched.firstChild);
    }

    let numberUnwatched = 1;
    let numberWatched = 1;

    watchList.forEach((anime) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${anime.isWatched ? numberWatched : numberUnwatched}</td>
            <td>${anime.attributes.canonicalTitle}</td>
            <td>${anime.attributes.status}</td>
            <td class="actions-td">
                <a class="action-button delete">Hapus</a>
                <a class="action-button complete">${anime.isWatched ? 'Ulangi' : 'Selesai'}</a>
            </td>
        `;

        tr.querySelector('.delete').addEventListener('click', () => {
            deleteWatchList(anime);
        });

        if (!anime.isWatched) {
            tr.querySelector('.complete').addEventListener('click', () => {
                anime.isWatched = true;
                updateLocalStorage()
            });

            tbodyUnwatched.appendChild(tr);
            numberUnwatched++;
        } else {
            tr.querySelector('.complete').addEventListener('click', () => {
                anime.isWatched = false;
                updateLocalStorage()
            });

            tbodyWatched.appendChild(tr);
            numberWatched++;
        }
    });
};

const deleteWatchList = (anime) => {
    const index = watchList.indexOf(anime);

    if (index !== -1) {
        watchList.splice(index, 1);
    }

    updateLocalStorage()
};

export default displayWatchList;