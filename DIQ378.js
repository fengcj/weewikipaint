const  multiRequest = (urls, maxNum) => {


    return  new Promise((resolve) => {
         const length = urls.length;
         let count = urls.length;
         let res = new Array(length);
     
 
         let handler = index => result => {
             res[index] = result;
             //console.log(res);
             maxNum++;
             if(count === 0){
                 //console.log(res);
                 resolve(res);
             }else{
                 mockFetch(urls.shift()).then(handler(length-count));
                 maxNum--;
                 count--;
             }
         }
 
         while(maxNum > 0){
             mockFetch(urls.shift()).then(handler(length-count));
             maxNum--;
             count--;
         }
 
 
     });
 
 
 }
 
 
 
 function mockFetch(url) {
 return new Promise((resolve) => {
   let start = new Date()
   setTimeout(() => {
     resolve(`start: ${start};end: ${new Date()}`)
   }, 0);
 })
 }
 
 
 
 setTimeout(function(){
 multiRequest([1,2,3,4,5,6,7,8,9], 3).then(x => console.log(x))
 
 },5000);