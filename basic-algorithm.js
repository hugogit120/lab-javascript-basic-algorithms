/*
 * PAIR PROGRAMMING
 * Daniel y Hugo
 */

// Definir nombre del driver
let hacker1 = prompt("Whats the driver's name?");
console.log(`the drivers name is: ${hacker1}`);


// Definir nombre del navigator
let hacker2 = prompt("Whats the navigator's name?");
console.log(`the second navigator name is: ${hacker2}`);


// Calcular nombre mas largo
function isLonger(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest , it has: ${hacker1.length} caracters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`yo, navigator got the longest name, it has ${hacker2.length} caracters`);
  } else {
    console.log(`wow, you both have equaly long names, ${hacker1.length}`);
  }
}

// Convertir a mayúsculas
function nameCaps(name) {
let answer = '';
    for (let i = 0; i < name.length; i++) {
      answer += `${name.charAt(i).toUpperCase()} `;
  }
  console.log(answer);
}


// Reversar nombre
function reverse(name) {
let answer = [];
    for (let i = 0; i < name.length; i++) {
      answer.push(name.charAt(i));
  }
  console.log(answer.reverse().join(""));
}

// Ordenar nombres lexicográficamente
function lexiOrder(hacker1, hacker2) {
  if  (hacker1.localeCompare(hacker2) > 0) {
      console.log("The driver's name goes first");
  } else if  (hacker1.localeCompare(hacker2) < 0) {
        console.log("Yo, the navigator goes first definitely");
  } else {
      console.log("What?! You both got the same name?");
  }
}

// Check Palindrome
function palindrome(string) {
    let originalString = [];
  for (let i = 0; i < string.length; i++){
    originalString.push(string.charAt(i).toLowerCase());
  } 
  let reverseString = [...originalString];
  reverseString = reverseString.reverse();
  if (originalString.toString().replace(/\W/g, '') === reverseString.toString().replace(/\W/g, '') ) {
      console.log("its a palindrome")
    } else {
        console.log("it is not a palindrome")
    }
}

// Lorem Ipsum Generator
function countLoremIpsum(lorem) {
let wordCounter = 0;
    for (i = 0; i <= lorem.length; i++) {
      if (lorem.charAt(i) == ' ' || lorem.charAt(i) == '\n') {
        wordCounter++;
    }
  }
  console.log(wordCounter + 1);
}
countLoremIpsum(prompt("Escribe Lorem Ipsum"));