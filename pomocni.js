 export function promenaParametara(img, src) {
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
