var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastNasme = "Kumar";
/**
 * if put some error code like found = 88.6;
 * By default, tsc will still generate a .js file
 *
 * Prevent this with a compiler flag:
 * tsc -noEmitOnError sample-types.ts
 */
console.log(found);
console.log("The grade is " + grade);
console.log("Hi" + firstName + " " + lastNasme);
// use template string
console.log("Hi ".concat(firstName, " ").concat(lastNasme));
