class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
        this.script();
    }

    script() {
        const links = this.querySelectorAll('nav a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                nav {
                    background-color: skyblue;
                    height: 40px;
                    display: flex;
                    justify-content: space-around;
                    color: white;
                    align-items: center;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                }
                
                .navigation ul {
                    display: flex;
                    gap: 10px;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                
                .navigation ul li {
                    cursor: pointer;
                }

                h1 {
                    font-size: 24px;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
            </style>

            <nav>
                <h1>Anime Dash</h1>
                <div class="navigation">
                    <ul>
                        <li><a href="#findAnime">Find Anime</a></li>
                        <li><a href="#watcList">Watch List</a></li>
                        <li><a href="#favList">Favorite</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);