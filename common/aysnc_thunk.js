function addAsync(x,y,cb){
  setTimeout(function(){
    cb(x+y);
  },1000);
}

function thunk(cb){
  return addAsync(10,15,cb);
}

thunk(function(result){
  console.log(result);
});
