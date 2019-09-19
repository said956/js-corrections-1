/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {// making the first class
        constructor(name) {
            super();// to call the main class animal 
            this.name = name;
        }
    }
    Cat.greeting = "Miaouwww !";

    class Dog extends Animal { // making second class 
        constructor(name) {
            super();// to call main class animal
            this.name = name;
        }
    }
    Dog.greeting = "Waf waf !";


    document.getElementById("run").addEventListener("click", () => {

        const cat1 = new Cat("Billy");
        const dog1 = new Dog("Rex");
        
        console.log(cat1.sayHello());
        console.log(dog1.sayHello());
    });

})();
