const me = {
    name: "santosh",
    lastName: "Dash",
    age: 22,
    isMarried: false,
}

me.age = 23
me.lastName = "Kumar Dash"

console.table(me)

me.city = "bbsr"

console.table(me)

const ME = {
    ...me,
    district: "kdp"
}
console.table(ME)