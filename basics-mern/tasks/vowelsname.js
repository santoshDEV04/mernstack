let name = "Santosh Kumar Dash"
let vowlArrInName

console.log(name.match(/[aeiou]/gi).length || 0);

vowlArrInName = name.match(/[aeiou]/gi)

console.log(vowlArrInName);