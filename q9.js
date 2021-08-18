const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };
console.log(gimli.greet())


//How to access and print greet function from the above object code?
/********************ANSWER****************/
//Use --> console.log(gimli.greet())
//gimli.greet() will access the greet function and console.log(gimli.greet()) will print it
