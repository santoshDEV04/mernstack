const me = {
    name: "santosh",
    lastName: "Dash",
    age: 22,
    isMarried: false,
}

me.age = 23
me.lastName = "Kumar Dash"
me.city = "bbsr"

const ME = {
    ...me,
    district: "kdp"
}
console.table(ME)


const entries = Object.entries(ME)
console.log("Added the object to the entries.");
console.log(entries);

//getting first two key-value

const first2 = Object.fromEntries(entries.slice(0, 2))
console.log(first2);

//getting last two key-value

const last2 = Object.fromEntries(entries.slice(-2))
console.log(last2);

// or

const { name, lastName, city, district } = ME
console.log(`My Name is ${name} ${lastName} Staying at ${city} but from ${district}.`);