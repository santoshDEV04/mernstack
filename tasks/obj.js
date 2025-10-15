let a = {
    name: "Dashrath Sahoo",
    age: 22,
}

let b = {
    name: "Santosh Kumar Dash",
    age: 23,
}

let c = {
    name: "Anurag Sahoo",
    age: 20,
}

let people = [
    { ...a },
    { ...b },
    { ...c }
]

console.table(people)