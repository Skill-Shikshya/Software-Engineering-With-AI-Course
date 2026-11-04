import { createInterface } from "node:readline/promises"
import {stdin as input, stdout as output} from "process"
import {readFile, writeFile} from "fs/promises"

const rl = createInterface({input, output})
const platformName = await rl.question("For which platform?"+"\n");
const password = await rl.question("What is your password"+ "\n");
const passArray = password.split("");

console.log("type of password", typeof(password));

const encryptedPassword = passArray.map((e) => String.fromCharCode(e.charCodeAt(0) + 1)).join("");
console.log("Encrypt pass:", encryptedPassword);


const storePassword = platformName + ":" + encryptedPassword + "\n"

await writeFile("example.txt", storePassword ,  {flag: "a", encoding: "utf-8"});

const fileRead = await readFile("example.txt", "utf-8");
console.log("The readFile content", fileRead);

rl.close()
