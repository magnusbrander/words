import { getStringsByLength, getStringsWithUniqueChars, getUniqueLengths } from "./src/string.js";
import { readFileLines } from "./src/readfile.js";

const myArg = process.argv.slice(2, 3)[0];
console.time("a");
const fileLines = readFileLines(myArg);
const lengths = getUniqueLengths(fileLines);
const fiveCharStrings = getStringsByLength(fileLines, 5);
const uniqueCharStrings = getStringsWithUniqueChars(fiveCharStrings);
console.timeEnd("a");

console.log(fileLines.length);
console.log(Array.from(lengths));
console.log(fiveCharStrings.length);
console.log(uniqueCharStrings.length);

