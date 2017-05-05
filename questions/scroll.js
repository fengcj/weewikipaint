/*    */


function de(callback,dely){


    var fun;
    return function(){
        if(fun){
            console.log(fun);
            clearTimeout(fun);
        }
        fun = setTimeout(function(){
            callback();
        },dely);
    }


}



/*var first = de(function(){
    console.log("First one");
},1000);*/

setTimeout( de(function(){
    console.log("First one");
},1000));



/*var second = de(function(){
    console.log("Second one");
},2000);*/



setTimeout(de(function(){
    console.log("Second one");
},2000));