function myFunction() {
    //"use strict";
    return () => {

        console.log(this)
        return this;
    }
}


//console.log(myFunction()());


console.log(new myFunction()());
