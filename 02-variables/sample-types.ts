let found : boolean = true;
let grade : number = 88.6;
let firstName : string = "Anup";
let lastNasme : string = "Kumar";

/**
 * if put some error code like found = 88.6;
 * By default, tsc will still generate a .js file
 * 
 * Prevent this with a compiler flag:
 * tsc -noEmitOnError sample-types.ts
 */

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastNasme);

// use template string with backticks ``
console.log(`Hi ${firstName} ${lastNasme}`);




