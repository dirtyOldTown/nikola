

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

function navBarZaMobilni(x) {
   if (x.matches) {
      navMobilni.classList.remove("hide");
      navLaptop.style.visibility = "hidden";
   } else {
      navMobilni.classList.add("hide");
      navLaptop.classList.remove("hide");
      navLaptop.style.visibility = "visible";
   }
}
navBarZaMobilni(mediaHandler2);
mediaHandler2.addEventListener("change", navBarZaMobilni);

const navRegulator = document.querySelector("#nav-regulator");
navRegulator.addEventListener("click", () => {
   if (navLaptop.style.visibility == "hidden") {
      navLaptop.style.visibility = "visible";
      navLaptop.classList.add("nav-bar-animacija");
   } else {
      navLaptop.style.visibility = "hidden";
      navLaptop.classList.remove("nav-bar-animacija");
      listaOpreme.style.visibility = "hidden";
      listaUsluga.style.visibility = "hidden";
   }
});

/*let imgElement = document.querySelector(".glava img:first-of-type");
let imgElement2 = document.querySelector(".glava img:last-of-type");
let slikeSrc = ["slike/slika2.jpg", "slike/slika1P.jpg"];
let slikeSrc2 = ["slike/slika1P.jpg", "slike/slika2.jpg"];
function promenaParametara(img, src) {
   if ( img.style.opacity == 1) {
      img.style.opacity = 0;
   }
   setTimeout(() => {
      if ( img.style.opacity == 0) {
         imgElement.style.opacity = 1;
      }
     img.src = src[1]
    }, 700);
    src.reverse()
}
let timer = setTimeout(function slideShow() {
   promenaParametara(imgElement, slikeSrc);
   timer = setTimeout(slideShow, 7000)
 });
 let timer2 = setTimeout(function slideShow2() {
   promenaParametara(imgElement2, slikeSrc2);
   timer2 = setTimeout(slideShow2, 7000)
 })*/



   
 














