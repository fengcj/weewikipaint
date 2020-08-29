let arr = [];
const Total = 996;
const Num = 10;
for (let i = 0; i < Num; i++) {
    arr.push(Math.floor(Math.random() * Total))
}

//console.log(arr);

// 给两个数组 [A1,A2,B1,B2,C1,C2,D1,D2] [A,B,C,D]
// 输出 [A1,A2,A,B1,B2,B,C1,C2,C,D1,D2,D]

let contact = (arr1, arr2) => {
    let res = [];
    let position2 = arr2.length - 1;
    let position1 = arr1.length - 1;

    res.unshift(arr2[position2--]);

    while (position1 >= 0 && position2 >= 0) {
        if (isLike(arr2[position1], res[0])) {
            res.unshift(arr1[position1--]);
        } else {
            res.unshift(arr2[position2--]);
        }
    }



    return res;
}