var a = 3 + 4;

let person = {
    name: "fengcj",
    age: 30
}


console.log(Object.keys(person));



new Promise((resolve, reject) => {
    resolve(1);
}).then(res => console.log(res));


function* gen() {
    yield 1;
}

let iterator = gen();
console.log(iterator.next());
console.log(iterator.next());


function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(123)
            console.log(789)
        }, 5000)
    })
}

async function helloWorld() {
    console.log(Date.now())
    const data = await sayHello()
    console.log(Date.now())
    console.log(data)
    console.log(456)
}

helloWorld()
console.log(666)