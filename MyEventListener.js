class MyEventListener {

    listeners = {};

    on(name, callback){
        (this.listeners[name] || (this.listeners[name] = [])).push(callback);
    }

    emit(name, ...args){
        this.listeners[name].forEach(callback => {
            callback(...args);
        });
    }

    removeListener(name,callback){
        this.listeners[name] ? this.listeners[name].filter( cb => cb !== callback) : void 0
    }

    removeAllListeners(name){
        this.listeners[name] ? this.listeners[name].length = 0 : void 0
    }

    once(name,callback){

        let wapperFun = (...args) => {
            callback(...args);
            this.removeListener(name, wapperFun);
        }
        this.on(name,wapperFun);
    }





}