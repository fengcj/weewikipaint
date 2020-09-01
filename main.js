import a, {setA, setB, b} from "./a.js"

// let a = 200; // error : Uncaught SyntaxError: Identifier 'a' has already been declared
// a = 200;  //  Uncaught TypeError: Assignment to constant variable.


console.log(a)

setA(200);

setTimeout(() => {console.log(a,"in main")},3000);



console.log(b);
setB(2000);
setTimeout(() => {console.log(b,"in main")},3000);