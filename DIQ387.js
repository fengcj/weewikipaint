const { rejects } = require("assert");
const { resolve } = require("path");

const retry = (fn,time) => {

    return new Promise(async (resolve,reject) => {
        while(time >0){
            try{
                let res = await fn();
                resolve(res);
                break;
            }catch (e){
                time-- 
                if(time == 0){
                    rejects(e)
                }
            }
        }
    });


}