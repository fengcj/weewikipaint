// bad use case
// 输出 true
console.log([] == ![])


/*
对于===, 会严格比较两者的值，但是对于==就不一样了

比如 null == undefined
如果非number与number比较，会将其转换为number
如果比较的双方中由一方是boolean,那么会先将boolean转换为number

*/

// 取反的优先级最高

// 这个输出 false
console.log(![])
// 套用上面第三条 将 false 转换为 数值
// 这个输出 0
console.log(Number(false))
// 包装类型与 基本类型 == 先将包装类型通过 valueOf toString 转换为基本类型 
// 输出 ""
console.log([].toString())
// 套用第2条， 将空字符串转换为数值、
// 输出 0
console.log(Number(""))
// 所以
console.log(0 == 0)

