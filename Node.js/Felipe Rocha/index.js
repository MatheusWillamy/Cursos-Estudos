const { Person } = require("./person");

//importar apenas para ser executado
require(".//modules/path.js")

const person = new Person('Felipe');

console.log(person.sayMyName());