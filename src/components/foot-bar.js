class FootBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
        

            footer {
                background-color: #333;
                color: #fff;
                text-align: left;
                padding: 20px 0;
            }

            .footer-content p {
                font-size: 14px;
            }
            
            .footer-content h2 {
                margin-bottom: 10px;
            }
            
            .footer-content {
                display: flex;
                justify-content: space-between;
            }
            
            .footer-description {
                width: 400px;
            }
            
            .footer-copyright {
                display: flex;
                align-items: center;
            }
        </style>


        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-description">
                        <h2>About Anime Dash</h2>
                        <p>Anime Dash adalah sebuah website anime. Kami menyediakan fitur seperti: rekomendasi anime,
                            mencari anime, menambahkan anime ke daftar tonton dan daftar favorit.</p>
                        <br>
                        <p>Merupakan website submision tugas akhir dari kelas Dicoding: Belajar Fundamental Front-End Web
                            Development</p>
                    </div>
                    <div class="footer-copyright">
                        <p>&copy; 2023 Sigit Fajar Desfian. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('foot-bar', FootBar)