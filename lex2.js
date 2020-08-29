var B = 1000;
var C = 2000;


let callback = () => console.log(A, B, C)
{
    {
        var A = 1;
        let B = 2;
        const C = 3;
        {
            (function () {
                console.log(A, B, C);  // 1 2 3
            })()

            setTimeout(callback);  //  1 1000 2000

        }
    }




}

//////////