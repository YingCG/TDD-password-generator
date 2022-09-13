module.exports = {
    getSinglePin, noSameConsecutiveNumber, noThreeIncrementNumber, isValidPin, createValidPin, generatePins
}

//* Each PIN should be: 4 digits long
function getSinglePin(){
    const pin = []
    const length = 4
    for (let i = 0; i < length; i++){
        const digit = Math.floor(Math.random() * 10)
        pin.push(digit)
    }
    return pin
}


// * Two consecutive digits should not be the same (e.g. 1156 is invalid)
// [A, B, C, D]
//  A must be different to B and B must be different to C and C must be different to D
function noSameConsecutiveNumber(pin){
    return pin[0] !== pin[1]
        && pin[1] !== pin[2]
        && pin[2] !== pin[3];
}

// Three consecutive digits should not be incremental (e.g. 1236 is invalid)
// [A, B, C, D]
// C is not equal to B+1 or D is not equal to C+1
// B is not equal to A+1 or C is not equal to B+1
function noThreeIncrementNumber(pin) {
  const [a, b, c, d] = pin;

  const firstThreeDigitsOk = b !== a + 1 || c !== b + 1;
  const lastThreeDigitsOk = c !== b + 1 || d !== c + 1;

  return firstThreeDigitsOk && lastThreeDigitsOk;
}

// Take the pin array, 
// If the pin is noSameConsecutiveNumber and the new pin is noThreeIncrementNumber
// If both conditions meet, convert the new pin array to string 
function isValidPin(pin) {
    return noSameConsecutiveNumber(pin) && noThreeIncrementNumber(pin)
}

// create a pin
// if valid, add it to the bacth
// If the batch contains 100 items, then return it


function createValidPin() {
    let pin;
    let isValid = false;

    while (!isValid) {
        pin = getSinglePin()
        isValid = isValidPin(pin)
    }
    
    return pin.join('')
}

function generatePins(){
    let pinCodes = []

    while (pinCodes.length < 1000) {
        const pin = createValidPin()
        if (pinCodes.findIndex(x => x === pin) === -1) {
            pinCodes.push(pin)
        }
    }

    return pinCodes;
}


// a function that returns a batch of 1,000 PIN codes
// 1. create one pine
// 2. check if the pin is a valid pin 
// 3. if the pin is valid, store into pins batch
// 4. remove if pins batch contain current pin
// 5. keep adding until the array is fill with 1000 pin
// Each PIN code in the batch should be valid, and unique
// 6. print all the pin


console.log(generatePins().sort().join(','))