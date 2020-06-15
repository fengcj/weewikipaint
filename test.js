"use strict";




/*
var foo = function bar() { return 12; };
typeof bar();*/

// var b = {num : 1};
// Object.seal(b);
// delete b.num;




/*let person = {
	name : 'fcj',
	age : 27,
	address : {
		city : 'China',
		plane : 'earth'
	}
};
let p2 = Object.assign({},person);
p2.address === person.address;  // true

// JSON.parse(JSON.stringify(a));
let p3 = JSON.parse(JSON.stringify(person));
p3.address === person.address*/




/*let array = [3,7,9,1,2];
for(let i in array){
	console.log(`${i}  ${array[i]}`);
}
// `of` in array
for(let item of array){
	console.log(item);
}
*/

/*let name = 'can be worked as expect?';
//  Array.from method can be worked with any iterable object.
let nameArray = Array.from(name);
console.log(nameArray);*/



/*let items = [{
		name : 'beijing',
		age : 350
	},
	{
		name : 'nanjing',
		age : 400
	},
	{
		name : 'xian',
		age : 400
	}];

// find method will only get the first item in array which is return ture
let result = items.find(item => item.age === 400);  
console.log(result);
// filter method will all the item in array which are return ture
result = items.filter(item => item.age === 400);  
console.log(result);*/


/*function Person(name, age){
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function(){
        console.log(this.name);
    }
}

Person.name = "John"; // not work in strict mode
Person.displayName = function(){
    console.log(this.name);
}

var person1 = new Person('Nishant');
    person1.displayName();
    Person.displayName();*/


/* function letIsNotHositing() {

	console.log(myLet); // ReferenceError: myLet is not defined
	let myLet = 4;

}
letIsNotHositing(); */




let func = x => y => x + y;
let firstCall = func(1);
console.log(typeof firstCall);
let secondCall = firstCall(10);
console.log(secondCall);