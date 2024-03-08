const pod = document.createElement('template');
pod.innerHTML=`
<style>

.description-card{
                    display:grid;
                    grid-template-columns: repeat(12,1fr);
                    grid-template-rows: 50px 200px  80px ;
                    grid-template-areas:
                    "n n n n n n n n n n n n"
                    "f f f f f f f f f f t t"
                    "f f f f f f f f f f t t"
                    "d d d d d d d d d d k k"
                    "d d d d d d d d d d k k"
                    "g g o o o o o o o o k k"
                    ;

                    height: 620px;
                    width: 900px;
                    background-color: #faf7f0;
                    border-radius:25px;
                    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                    margin: 30px;
                }
#podrozownik-name{grid-area:n;
                  font-family: 'Poppins', sans-serif;
                  display:flex;
                  justify-content:center;
                  align-items: center;


                }
#podrozownik-img{grid-area:f;
                width: 100%;
                height: 100%;
                border-top: 1px solid #d9d3d2;

     }
#description{grid-area:d;
    display:flex;
    justify-content:center;
    font-family: 'Nunito', sans-serif;

    margin: 20px;
    width:700px;
    border-top: 1px solid #d9d3d2;}

#podrozownik-link{grid-area: k ;

        width: 100%;
        display:flex;
        justify-content:center;
        align-items: center;
        background-color: #4578b0;
        border-radius: 25px 0px 25px 0px;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color: black;
    }

        a {
            text-decoration: none;


      }
#technologies{
    grid-area: t;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 12px;
    border-top: 1px solid #d9d3d2;
}
#podrozownik-git-link{grid-area: g ;


    height :10px;
    margin: 30px;

    }

#django-img {width: 30px;
}
#python-img{width: 30px;
}
#js-img{width: 30px;
}
#react-img{width: 30px;}
#docker-img{width: 30px;}
#github-img {width: 40px;}
</style>



<div class="description-card">

<h3 id='podrozownik-name'>Podróżownik</h3>
<p id='description'>Przedstawiam aplikację Pdróżownik. Jest to projekt w którym po zarejestrowaniu się
można tworzyć własną kolekcję tras gpx. Podróżownik znajdzie  zastosowanie u miłośników podróży rowerowych, samochodowych i nie tylko.
 Ślady wyświetlane sa na mapie. Każdej trasie można przypisać dowolnie
wybrany kolor. Projekt ma szeroki potencjał rozwoju. W przyszłości planuję dodać funkcjonalność wyświetlania
profilu wysokościowego trasy oraz kolekcji zdjęć z przebiegu wyvieczki
 </p>



<img id='podrozownik-img'/>
<div id='technologies'><img id='python-img'/><img id='django-img'/><img id='js-img'/><img id='docker-img'/></div>
<a id='podrozownik-link' target="_blank" href="https://vagabond-hand-production.up.railway.app/"> Zobacz sam</a>
<a id='podrozownik-git-link' target="_blank" href="https://github.com/Pogodowo/geoproject"  ><img id='github-img'/></a>
</div>`

class Podrozownik extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.appendChild(pod.content.cloneNode(true));
    this.shadowRoot.querySelector('#podrozownik-img').src=`${this.getAttribute('avatar')}`;
    this.shadowRoot.querySelector('#django-img').src=`${this.getAttribute('django')}`;
    this.shadowRoot.querySelector('#python-img').src=`${this.getAttribute('python')}`;
    this.shadowRoot.querySelector('#js-img').src=`${this.getAttribute('js')}`;
     this.shadowRoot.querySelector('#docker-img').src=`${this.getAttribute('docker')}`;
     this.shadowRoot.querySelector('#github-img').src=`${this.getAttribute('github')}`;

    }
}

window.customElements.define('podrozownik-app',Podrozownik);


