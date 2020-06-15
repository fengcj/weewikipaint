function chef(foods){

    let i = 0;
    return {

        next(){
            let done = i === foods.length ? true : false;
            let value = done ? void 0 : foods[i++] ;
            
            return {
                value,
                done,
            }
        }


    }

}

let foods = [1,2,3,4];
let iterator = chef(foods);
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?
console.log(iterator.next()); //?