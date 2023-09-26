class FindAnime extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 10px;
                margin: 50px;
            }

            .content .search-input {
                padding: 10px;
                margin: 10px;
                max-width: 100em;
                width: 40rem;
                border-radius: 5px;
                border: none;
                box-shadow: 0px 0px 32px -13px rgba(0, 0, 0, 0.43);
                -webkit-box-shadow: 0px 0px 32px -13px rgba(0, 0, 0, 0.43);
                -moz-box-shadow: 0px 0px 32px -13px rgba(0, 0, 0, 0.43);
                outline: none;
            }
            
            .wrapper-label {
                display: flex;
                width: 800px;
            }
            
            .card-wrapper {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 15px;
                margin: 10px;
                margin-top: 10px;
                min-height: 400px;
            }
            
            .card {
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
                background-color: white;
                width: 150px;
                transition: transform 0.3s ease;
            }
            
            .card img {
                width: 150px;
                height: auto;
            }
            
            .card p {
                margin: 5px;
            }
            
            .card:hover {
                transform: scale(1.05);
            }            
        </style>

        <div class="content" id="findAnime">
            <h1>Temukan Anime</h1>
            <form action="">
                <input type="search" placeholder="Search anime..." class="search-input">
            </form>
            <div class="wrapper-label">
                <h3>Direkomendasikan:</h3>
            </div>
            <div class="card-wrapper">
            </div>
        </div>
        `;
    }
}

customElements.define('find-anime', FindAnime);