function go(num){
    let count = 0;
    let func = () => ` g + ${count} + l `;
    if(!num){
        count++;
        return func;
    } else{
        return func();
    }

}
console.log(go("i"));
console.log(go()('l'));


function fn() {console.log(this)}
function fn2() {fn()}
var obj = {fn2}
obj.fn2() // ?

console.log(obj.fn2());



var arrow = {
    fn: () => { console.log(this)}
}
arrow.fn() // ?
  


var arrow = {
    fn() {
      const a = () => console.log(this)
      a()
    }
  }
  arrow.fn()  // arrow
  