enum CATEGORY { BOOK, CPU, CAR }

interface Person<T> {
    goal: T
    own: CATEGORY
    name: string
    age: number
}

let student: Person<string> = {
    goal: "school",
    own: CATEGORY.BOOK,
    name: "tom",
    age: 9
}

student

console.log(student)





