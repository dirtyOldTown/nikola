let usluge = document.querySelector("#usluge")
let listaUsluga = document.querySelector("#usluge div")
usluge.addEventListener("click", () => {
   if (listaUsluga.style.visibility == "visible") {
    listaUsluga.style.visibility = "hidden";
   } else {
    listaUsluga.style.visibility = "visible";
    listaOpreme.style.visibility = "hidden";
   }
 });
 let oprema = document.getElementById("oprema");
 let listaOpreme = document.querySelector("#oprema div");
 oprema.addEventListener("click", () => {
    if (listaOpreme.style.visibility == "visible") {
        listaOpreme.style.visibility = "hidden";
    } else {
        listaOpreme.style.visibility = "visible";
        listaUsluga.style.visibility = "hidden";
    }
 });







