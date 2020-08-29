function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
    
    if (funcs.length === 1) {
      return funcs[0]
    }
    
    return funcs.reduce(function(a, b) {
      return function (...args) {
        return a(b(...args))
      }
    })
  }
  

  let res = compose(
      
          x => x + 1,
          y => y * 2
      
  )

  console.log(res(5));