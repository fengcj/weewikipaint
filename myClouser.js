let count = 0;
function closure1() {

    const fun = () => {
        count++;
        console.log(count);
    }

    return fun;

}



let c1 = closure1();
c1();
let c2 = closure1();
c2();

console.log(c1 === c2);