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

  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404


    async function Refactor(url){

      try{
        var res = await fetch(url);
        if(res.status === 200){
          var r = await res.json();
        }else{
          throw new Error("");
        }
      }catch(e){
          alert(e);
      }
    }