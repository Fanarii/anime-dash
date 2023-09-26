import initialDisplay from '../view/initialDisplay.js';

let initialData = [];

const getInitialData = async () => {
    try {
        const res = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure');
        const resJson = await res.json();
        initialData = resJson.data;

        initialDisplay();
    } catch (error) {
        console.error(error);
        console.log(error)
    }
};

export {initialData, getInitialData}