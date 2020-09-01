let a = 100;


let b = 1000;

setTimeout(() => {console.log(a, "in a.js")},5000);
setTimeout(() => {console.log(b, "in b.js")},5000);

export function setA(val){
  a = val;
};

export {b};

export function setB(val){
    b = val;
}

export default a;

