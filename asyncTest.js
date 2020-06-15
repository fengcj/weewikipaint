var i = 0;
async function asyncF(){
    console.log(i);
    return i++;
}


[1,2,3,4,5].reduce(async (lastPromise, i) => {
      try {
        let res = await lastPromise
        console.log(res);
        console.log(await asyncF())
      } catch(e) {
        console.error(e)
      }
    }, Promise.resolve(10))


async function returnTest(){

}

let res = returnTest();
res instanceof Promise //? true