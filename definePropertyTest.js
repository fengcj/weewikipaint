let obj = {};


Object.defineProperty(obj,"b",{

    get(){
        return 3;
    }

});

console.log(obj.b);
obj.b = 10;
console.log(obj.b);