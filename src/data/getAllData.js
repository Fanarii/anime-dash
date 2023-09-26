let animeData = [];

const getAllData = async () => {
    try {
        let page = 1;
        let hasNextPage = true;

        while (hasNextPage) {
            const res = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${(page - 1) * 20}`);
            const resJson = await res.json();

            if (resJson && resJson.data) {
                const pageAnimeData = resJson.data;
                animeData.push(...pageAnimeData);
                page++;

                if (pageAnimeData.length < 20) {
                    hasNextPage = false;
                }
            } else {
                alert('Error pak');
                break;
            }
        }

        return animeData;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export {animeData, getAllData}