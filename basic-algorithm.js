/*
 * PAIR PROGRAMMING
 * Daniel y Hugo
 */

// Definir nombre del driver
let hacker1 = prompt("Whats the driver's name?");
console.log(`The driver's name is: ${hacker1}`);


// Definir nombre del navigator
let hacker2 = prompt("What's the navigator's name?");
console.log(`The navigator's name is: ${hacker2}`);


// Calcular nombre mas largo
function isLonger(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has: ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equaly long names, ${hacker1.length} characters!!`);
  }
}

// Convertir a mayúsculas
function nameCaps(name) {
  console.log(name.toUpperCase());
}


// Reversar nombre
function reverse(name) {
  console.log(name.split("").reverse().join(""));
}

// Ordenar nombres lexicográficamente
function lexiOrder(hacker1, hacker2) {
  if (hacker1.localeCompare(hacker2) > 0) {
    console.log("The driver's name goes first");
  } else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?");
  }
}

// Check Palindrome
function palindrome(string) {
  if (string.split("").toString().toLowerCase().replace(/\W/g, '') === string.split("").reverse().toString().toLowerCase().replace(/\W/g, '')) {
    console.log("its a palindrome")
  } else {
    console.log("it is not a palindrome")
  }
}

// Lorem Ipsum Generator
function countLoremIpsum(lorem) {
  console.log(lorem.split(/\s+/).length);
}

// Count words
function countEt(string) {
    console.log(string.match(/\bet/g).length);
}

//isLonger(hacker1, hacker2);
//nameCaps(hacker1);
//reverse(hacker2);
//lexiOrder(hacker1, hacker2);
//palindrome(prompt("Introduce una frase para verificar si es un Palindrome"));
//countLoremIpsum(prompt("Escribe un párrafo"));
countEt(prompt());