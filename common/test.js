"use strict";

function MyPizza(){
  this.slices = 0;
  function slice(){
    console.log(this === global);
  //  this.slices++;
  }
  slice();
  console.log(this.slices);
}

new MyPizza();



function MyPizza2(){
  this.slices = 0;
  var slice = () => {
    console.log(this === global);
    this.slices++;
  };
  slice();
  console.log(this.slices);
}

new MyPizza2();


// fun1();
// var fun1 = function(){
//   console.log("fun1");
// }


fun2()
function fun2(){
  console.log("fun2");
}




function puppties(...items){
    console.log(items);
    console.log(Array.isArray(items));
}

puppties(1,2,3,4);




class A{
  constructor(name){
    this._name = name;
  }
  logName(){
    console.log(this._name);
  }
  get name(){
    return this._name
  }
  set name(newName){
    this._name = newName;
  }
}

let a = new A("igt");
console.log(a.name);

console.log(a.__proto__.logName);
console.log(a.__proto__.hasOwnProperty("logName"));
//hasOwnProperty()









// end
