

let usluge = document.querySelector("#usluge");
let listaUsluga = document.querySelector("#usluge div");
let oprema = document.getElementById("oprema");
let listaOpreme = document.querySelector("#oprema div");
usluge.addEventListener("click", () => {
   if (listaUsluga.style.visibility == "visible") {
    listaUsluga.style.visibility = "hidden";
   } else {
    listaUsluga.style.visibility = "visible";
    listaOpreme.style.visibility = "hidden";
   }
 });
 oprema.addEventListener("click", () => {
    if (listaOpreme.style.visibility == "visible") {
        listaOpreme.style.visibility = "hidden";
    } else {
        listaOpreme.style.visibility = "visible";
        listaUsluga.style.visibility = "hidden";
    }
 });

 const mediaHandler = window.matchMedia('screen and (max-width: 992px)');
 const laptop = document.querySelector(".laptop");
 const mobilni = document.querySelector(".mobilni");
 function promenaTeksta(x) {
    if (x.matches) {
       laptop.classList.add("hide");
       mobilni.classList.add("visible")
    } else {
        laptop.classList.remove("hide");
        mobilni.classList.remove("visible")
    }
 }

promenaTeksta(mediaHandler);
mediaHandler.addEventListener("change", promenaTeksta);
const mediaHandler2 = window.matchMedia('screen and (max-width: 600px)');
const navMobilni = document.querySelector(".nav-mobilni");
const navLaptop = document.querySelector(".nav-bar");
const navBarLink = document.querySelector("#gore a");
function navBarZaMobilni(x) {
   if (x.matches) {
      navMobilni.classList.remove("hide");
      navLaptop.style.visibility = "hidden";
      navBarLink.setAttribute("href", "#nav-mob");
   } else {
      navMobilni.classList.add("hide");
      navLaptop.classList.remove("hide");
      navLaptop.style.visibility = "visible";
      navBarLink.setAttribute("href", "#nav");
   }
}
navBarZaMobilni(mediaHandler2);
mediaHandler2.addEventListener("change", navBarZaMobilni);

const navRegulator = document.querySelector("#nav-regulator");
navRegulator.addEventListener("click", () => {
   if (navLaptop.style.visibility == "hidden") {
      navLaptop.style.visibility = "visible";
      navLaptop.classList.add("nav-bar-animacija");
      navRegulator.style.color = "#996600";
   } else {
      navLaptop.style.visibility = "hidden";
      navLaptop.classList.remove("nav-bar-animacija");
      listaOpreme.style.visibility = "hidden";
      listaUsluga.style.visibility = "hidden";
      navRegulator.style.color = "#1B1B1B";
   }
});

let slikeSrc = ["slike/slika2.jpg", "slike/slika3.jpg"];
let slikeSrc2 = ["slike/slika1.jpg", "slike/slika4.jpg"];
let slika1 = document.querySelector(".glava img:first-of-type");
let slika2 = document.querySelector(".glava img:last-of-type");
slika1.style.transition = 'all 1s';
slika2.style.transition = 'all 1s';
function slajd() {
   slika1.style.opacity = 0;
   slika2.style.opacity = 0;
   setTimeout(() => {
      slika1.style.opacity = 1;
      slika2.style.opacity = 1;
      slika1.src = slikeSrc[1];
      slika2.src = slikeSrc2[1];
      slikeSrc.reverse();
      slikeSrc2.reverse();
   }, 800);
}
let timer = setTimeout(function prikaziSlajd() {
   slajd()
   timer = setTimeout(prikaziSlajd, 7000)
}, 7000);

let ambijentalnaMuzika = document.getElementById("muzika");
let volumeIcon = document.querySelector("#volume");
let sviraMuzika = false;
let play = 'fas fa-volume-up';
let mute = 'fas fa-volume-down';
volumeIcon.addEventListener("click", () => {
   if (!sviraMuzika) {
      volumeIcon.setAttribute("class", play);
      sviraMuzika = true;
      ambijentalnaMuzika.play()
   } else {
      volumeIcon.setAttribute("class", mute);
      sviraMuzika = false;
      ambijentalnaMuzika.pause()
   }
});

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

let idiGore = document.querySelector("#gore a");
let fontAwasome = document.querySelector("#gore i");
idiGore.style.visibility = "hidden";
fontAwasome.style.visibility = "visible";







   
 














