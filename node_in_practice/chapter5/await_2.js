async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    console.log("Guess first");
    let result = await promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();
  console.log("Before or after?");


  //Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. 
  //That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

  // As said, await only works inside async function.