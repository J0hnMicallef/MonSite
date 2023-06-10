const iconMenu = document.querySelector(".iconMenu");
const txtIconMenu = document.querySelector("#txtIconMenu");
const btnMenuContener = document.querySelector("#btnMenuContener");
// const = document.querySelector("");
const accueil = document.querySelector(".accueil");
const monProfil = document.querySelector(".monProfil");
const autre= document.querySelector(".autre");




iconMenu.addEventListener("click",()=>{
    if (btnMenuContener.classList != "animeIconMenuOuvert") {
        btnMenuContener.classList.remove("animeContenerMenuFermé");
        iconMenu.classList.remove("animeIconMenuFermé");
        btnMenuContener.classList.add("animeIconMenuOuvert");
        iconMenu.classList.add("animeIconMenuOuvert");
    } else {
        btnMenuContener.classList.remove("animeIconMenuOuvert");
        iconMenu.classList.remove("animeIconMenuOuvert");
        btnMenuContener.classList.add("animeContenerMenuFermé");
        iconMenu.classList.add("animeIconMenuFermé");
    }
})

function fctAccueil() {
    accueil.style.visibility="visible";
    monProfil.style.visibility="hidden";
    autre.style.visibility="hidden";
}

function fctMonProfil() {
    monProfil.style.visibility="visible";
    accueil.style.visibility="hidden";
    autre.style.visibility="hidden";
}

function fctAutre() {
    autre.style.visibility="visible";
    monProfil.style.visibility="hidden";
    accueil.style.visibility="hidden";
}

const radarCanvas = document.getElementById("radarCanvas");
const radarChart = new Chart(radarCanvas, 
    {
        type: "radar",
        data: {
            labels: ['Motivé', 'Curieux', 'Méthodique', 'Organisé', 'Responsable','Patient', "Dynamique"],
            datasets: [
                {
                    data: [10, 9, 9, 8, 10, 7, 8],
                    borderColor: ['darkblue'],
                    borderWidth: [1,],
                    backgroundColor: ["rgba(49, 49, 255, 0.4)"],
                }
            ],
        },
        options: 
        {
            scales:
            {
                r: {
                    suggestedMin: 0
                }
            },

            plugins: 
            {
                title: {
                    display: true,
                    text: "Mes Qualités",
                    position: 'top',
                    color: "black"
                },
                legend: {
                    display: false
                },
            }
        },
    })

var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
    
function sauter(){
    if(perso.classList != "animation"){
        perso.classList.add("animation");
    }
    setTimeout(function(){
        perso.classList.remove("animation");
    },500)
}
  
var compteur = 0;

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
        
    if(obstaclesLeft<50 && obstaclesLeft>0 && persoTop>= 145){
        obstacles.classList.remove("animeObstacles");
        alert("Votre scores: "+ compteur );
    } 
},1)

function start() {
    obstacles.classList.add("animeObstacles");
    compteur = 0;
}

var verification = setInterval(function(){
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if (obstaclesLeft<0) {
        compteur = compteur + 1;
    };
},151);

var contenerCompteur = document.querySelector(".contenerCompteur");
