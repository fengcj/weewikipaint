let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;


function Promise(){

    // store state which can be PENDING, FULFILLED or REJECTED
    var state = PENDING;
    // store value or error once FULFILLED or REJECTED
    var value = null;
    // store sucess & failure handlers attached by calling .then or .done
    var handlers = [];

    function fulfill(result) {
        state = FULFILLED;
        value = result;
    }

    function reject(error) {
        state = REJECTED;
        value = error;
    }

    function resolve(result){
        try{
            var then = getThen(result);  // why
            if(then){
                doResolve(then.bind(result));  // why
                return
            }
            fulfill(result);
        }catch(e){
            reject(e);
        }
    }


}