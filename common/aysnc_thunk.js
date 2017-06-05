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



function EventTracker(name){
  this.name = name;
}

EventTracker.prototype = {
  "on" : function(eventName,callback){
    this._trigger = this._trigger || {};
    if(!this._trigger[eventName]){
      this._trigger[eventName] = [];
    }
    this._trigger[eventName].push(callback);
  },
  "notify" : function(receiver,eventName){
    this._notify = this._notify || [];
    this._notify.push({
      receiver : receiver,
      eventName : eventName
    });
  },
  "trigger" : function(eventName,args){
    var self = this;
    this._trigger[eventName].forEach(function(callback){
      console.log(args);
      callback(args);
    });
    console.log(this._notify);
    this._notify.forEach(function(item){
      item.receiver.trigger(eventName);
    });
  }
};


function purchase(item) { console.log( 'purchasing ' + item); }
function celebrate() { console.log( this.name + ' says birthday parties are awesome!' ); }

var nephewParties = new EventTracker( 'nephews ');
var richard = new EventTracker( 'Richard' );

nephewParties.on( 'mainEvent', purchase );
richard.on( 'mainEvent', celebrate );
nephewParties.notify( richard, 'mainEvent' );

nephewParties.trigger( 'mainEvent', 'ice cream' );





function MyPizza(){
  this.slices = 0;
  function slice(){
    this.slices++;
  }
  slice();
}
