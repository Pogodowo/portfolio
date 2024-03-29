const rec = document.createElement('template');
rec.innerHTML=`
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
                    "g g l l l l l l l l k k"

                    ;

                    height: 610px;
                    width: 900px;
                    background-color: #faf7f0; 
                    border-radius:25px;
                    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                    margin: 30px;
                }
#receptura-name{grid-area:n;                
                  font-family: 'Poppins', sans-serif;
                  display:flex;
                  justify-content:center;
                  align-items: center;
                  
                  
                }  
#receptura-img{grid-area:f;
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

#receptura-link{grid-area: k ;
        
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

#receptura-git-link{grid-area: g ;


    height :50px;
    margin: 20px;

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


#django-img {width: 40px;
} 
#python-img{width: 40px;
} 
#js-img{width: 40px;
} 
#react-img{width: 40px;}
#github-img {width: 40px;
}
</style>



<div class="description-card">

<h3 id='receptura-name'>Twoja Receptura</h3>
<p id='description'>Przedstawiam aplikację Twoja-receptura. Jest to prosty kalkulator webowy 
służący do  przeprowadzania obliczeń ilości poszczególnych składników w lekach recepturowych.
Został stworzony w celu zwiększenia komfortu codziennej pracy farmaceutów. Po rozpoczęciu nowej receptury
w aplikacji dodajemy kolejno składniki tak jak zapisano je na recepcie wraz z parametrami uwzględnionymi w wyświetlonym formularzu.
Program na bieżąco dokonuje obliczeń.
Zapraszam do zapoznania się.
 </p>



<img id='receptura-img'/>
<div id='technologies'><img id='python-img'/><img id='django-img'/><img id='js-img'/></div> 
<a id='receptura-link' target="_blank" href="https://twoja-receptura.pl"> Zobacz sam</a>
<a id='receptura-git-link' target="_blank" href="https://github.com/Pogodowo/Monorec"  ><img id='github-img'/></a>
</div>`

class Receptura extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"});
    this.shadowRoot.appendChild(rec.content.cloneNode(true));
    this.shadowRoot.querySelector('#receptura-img').src=`${this.getAttribute('avatar')}`;
    this.shadowRoot.querySelector('#django-img').src=`${this.getAttribute('django')}`;
    this.shadowRoot.querySelector('#python-img').src=`${this.getAttribute('python')}`;
    this.shadowRoot.querySelector('#js-img').src=`${this.getAttribute('js')}`;
    this.shadowRoot.querySelector('#github-img').src=`${this.getAttribute('github')}`;
    }
}

window.customElements.define('twoja-receptura',Receptura);


