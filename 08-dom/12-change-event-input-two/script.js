/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //définir variable compteur i
    let i = 0;
    let a = 0;

    //évènement saisie de touche clavier sur l'input
    document.querySelector("input").onkeyup = function() {
        
        i++;
        let u = document.getElementById("pass-one").value;
        let reG = /\d/;

        if (reG.test(u)) {
            a++;
        };

        if (i >= 8 && a >= 2) {
            document.getElementById("validity").innerHTML = "OK";
        };

    };

})();
