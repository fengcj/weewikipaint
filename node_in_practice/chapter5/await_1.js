"use strict";
// var fn = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1)
//       }, 2000)
//     })
//   }
//   const Fn = async () => {
//     await fn().then((res) => {
//       console.log(res)
//     })
//   }
//   Fn()
//   console.log(2)
  

  async function f() {
    return 1;
  }

//f().then(console.log);

async function  test(){
  var res = await f();
  console.log(res);
  console.log("Before or after ?");
}

test();

