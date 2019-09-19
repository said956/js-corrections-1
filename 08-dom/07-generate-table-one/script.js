/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let table = "<table>"
    for (var i = 0; i < 10; i++) {
      table += "<tr><td>ligne "+(i+1)+"</td></tr>"
    }
    table += "</table>"
    document.getElementById('target').innerHTML = table;

})();