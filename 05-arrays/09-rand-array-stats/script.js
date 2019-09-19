/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{
        let min = 1000;
        let max = -1;
        let somme = 0;
        let moyenne = 0;
        for (i=1; i<=10; i++){
        // loop to do into array to create 10 random number between 0 and 100
            let randomnumber = Math.floor(Math.random()* 100);
            // console.log(randomnumber);
            document.getElementById("n-"+i).innerHTML = randomnumber;
            // put these random numbers in the html
            if(max<randomnumber){
                max = randomnumber;
                document.getElementById("max").innerHTML=max;
                // console.log(max);
            }
            // condition that checks if variable max is smaller than value in randomnumber
            // at each iteration if value in max is smaller than random then variable max takes its value until finding max of all randomnumbers
            if (min>randomnumber){
                min = randomnumber;
                document.getElementById("min").innerHTML=min;
                // console.log(min);
            }
            somme += randomnumber; 
            document.getElementById("sum").innerHTML= somme;
            // console.log(somme);
        }
        moyenne = somme / 10;
        // console.log(moyenne);
        document.getElementById("average").innerHTML= moyenne;
    });
})();
