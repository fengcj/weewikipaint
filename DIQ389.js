const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
//test()



async function test2(){


    for(let x of list){
        let res = await square(x)
        console.log(res)
    }

}

//test2()



let promise = Promise.resolve()
function test3(i = 0) {
  if (i === list.length) return
  promise = promise.then(() => square(list[i])).then(x => console.log(x))  // why????
  console.log(i)
  test3(i + 1)
}
test3()



//  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/389