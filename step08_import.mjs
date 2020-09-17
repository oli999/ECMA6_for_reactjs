import { writeLetter, writeMemo } from "./writing_util.mjs";
import mem from "./my_util.mjs";

console.log("step08_import.js 시작");

writeLetter();
writeMemo();
console.log(mem.num);
console.log(mem.name);
mem.sayHello();

console.log("step08_import.js 끝");
