"use strict";
// if ( true) {
//     function baz() { console.log('I passed') }
// } else {
//     function baz() { console.log('I didn\'t pass') }
// }
// baz();
this.otherThing = b => console.log("outter: " + b);
console.log(this);
let a = {
    oneThing: ( a ) => {
         let b = a * 2;
         this.otherThing(b);
    },
    otherThing: ( b ) => console.log(b)
};
a.oneThing(6);