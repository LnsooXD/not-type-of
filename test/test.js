var not = require('../');

console.assert(not.string('string') === false, "Assert String fail");
console.assert(not.string('array') === false, "Assert String fail");

console.log('test successful');
