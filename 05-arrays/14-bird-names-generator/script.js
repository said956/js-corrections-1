/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    
    document.getElementById("run").addEventListener("click",() => { // ajout d'un event listener sur le bouton
        
    
        // création d'une fonction qui va faire un véritable aléatoire
        var RealRand = (max) => { return Math.floor(Math.random() * max);}; 
        
        
        // appel de la fonction de vrai aléatoire dans une variable.
        // on recupere l'oiseau en question de l'index en question.
        var birdIndex = RealRand(birds.length);
        var bird = birds[birdIndex].name;  
        
        // transformation du set en tableau. et on recuper le bon adjectif dans une variable directe
        var adj = Array.from(adjectives)[RealRand(adjectives.size)]; 

        // si l'objet birds contient une propriété fem, on lui dit que c'est l'article "la", sinon c'est "le".
        var artDef = (birds[birdIndex].fem != undefined)? "la" : "le"; 
        adj +=  (birds[birdIndex].fem != undefined)? "e" : ""; // pareil qu'au dessus, on ajoute E au pronom i l'objet birds contient une propriété fem
        
        // construction de la phrase =>
        document.getElementById("target").innerHTML = artDef + " " + bird + " " + adj; // on tape le tout dans target et c'est plié!
    });
    
})();
