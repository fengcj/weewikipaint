Array.prototype.myArraySplice = function(start,deleteCount,...args) {

    // ignor error check
    
    if(start >= this.length) return this;

    let left = this.slice(0,start);

    console.log(left);

    let right = this.slice(start+deleteCount-1);
    console.log(right);

    let res = [...left, ...args, ... right];
    console.log(res);

    this.length = 0;
    res.forEach(item => this.push(item))
    return this;
}




let arr = [1,2,3,4,5,6]

console.log(arr.myArraySplice(2,3));


//  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/384