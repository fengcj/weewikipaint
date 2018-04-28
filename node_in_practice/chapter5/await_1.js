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



class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

async function loadJson(url){
  var response = await fetch(url);
  if(response.status === 200){
    var res = await response.json();
    return res;
  }
  throw new HttpError(response);
}

async function demoGithubUser() {

  let name = prompt("Enter a name?", "iliakan");
  try{
    let use = await loadJson(`https://api.github.com/users/${name}`);
    return use;
  }catch(e){
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
  


}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
