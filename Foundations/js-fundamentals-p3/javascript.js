let add7 = (a) => a + 7;

let multiply = (a,b) => a*b;

let captialize = (string) => {
    let lowerString = string.toLowerCase();
    return lowerString.slice(0,1).toUpperCase() + lowerString.slice(1);
}

let lastLetter = (string) => string.slice(-1);


console.log("adding 7 to 1 returns " + add7(1))
console.log("multiplying 6 to 5 returns " + multiply(6,5))
console.log("Capitalising the string HURRduRR returns " + captialize("HURRduRR"))
console.log("The last letter of HURRduRR is " + lastLetter("HURRduRR"))