/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    const image = document.querySelector("img"); 
    let i = 0;

    document.getElementById("next").addEventListener("click", () => {
        i++
        // On incrémente de 1 pour faire défiler les images
        if(i >= gallery.length){      
            // En fin de longueur du tableau, on redémarre au début de l'index
            i = 0;  
        }
        image.src = gallery[i];   
        // On associe image aux éléments du tableau (suivant le numéro d'index)                       
        
        
    });
})();