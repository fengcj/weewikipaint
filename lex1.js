var B = 1000;
var C = 2000;

{
    {
        var A = 1;
        let B = 2;
        const C = 3;
        {
            (function(){
                console.log(A,B,C);  //  1 2 3
            })()

            setTimeout(() => console.log(A,B,C));  //  1 2 3

        }
    }




}

