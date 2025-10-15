const people = [
    {
        name: 'sanotsh kumar dash',
        age: 23,
    },
    {
        name: 'john doe',
        age: 30,
    },
    {
        name: 'jane smith',
        age: 25,
    },
    {
        name: 'alice johnson',
        age: 28,
    }
]


const [firstPerson, , thirdPerson] = people
const [ , ,third,fourth ] = people

console.table(firstPerson);
console.table(thirdPerson);

console.table(third);
console.table(fourth);