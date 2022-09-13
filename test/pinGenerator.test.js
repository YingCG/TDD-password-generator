const pinGenerator = require('../pinGenerator');

// Write a library for generating random PIN codes. You probably know what a PIN code is; it’s a short sequence of numbers, often used as a passcode for bank cards.

// * The library should export a function that returns a batch of 1,000 PIN codes in random order
// * Each PIN code in the batch should be unique
// * Each PIN should be:
// * 4 digits long
// * Two consecutive digits should not be the same (e.g. 1156 is invalid)
// * Three consecutive digits should not be incremental (e.g. 1236 is invalid)
// * The library should have automated tests.

test('Have generating 4 digits random PIN codes', () => { 
    //Act
    const pin = pinGenerator.getSinglePin()

    //Assert
    expect(pin).toHaveLength(4)
})

test('Two consecutive digits should not be the same (e.g. 1156 is invalid)', () => {
    //Act
    const testPin = [1,1,5,6]
    const noSameValueNext = pinGenerator.noSameConsecutiveNumber(testPin)
     
    //Assert
    expect(noSameValueNext).toBe(false)

})
test('Two consecutive digits should not be the same (e.g. 1156 is invalid)', () => {
    //Act
    const testPin = [1,1,1,6]
    const noSameValueNext = pinGenerator.noSameConsecutiveNumber(testPin)
     
    //Assert
    expect(noSameValueNext).toBe(false)

})
test('Two consecutive digits should not be the same (e.g. 1156 is invalid)', () => {
    //Act
    const testPin = [1,1,1,1]
    const noSameValueNext = pinGenerator.noSameConsecutiveNumber(testPin)
     
    //Assert
    expect(noSameValueNext).toBe(false)

})

test('Three consecutive digits should not be incremental (e.g. 1236 is invalid)', () => {
    //Act
    const testPin = [1,2,3,6]
    const noThreeIncrementNumber = pinGenerator.noThreeIncrementNumber(testPin)

    //Assert
    expect(noThreeIncrementNumber).toBe(false)
})

test('Three consecutive digits should not be incremental (e.g. 1236 is invalid)', () => {
    //Act
    const testPin = [1,2,3,4]
    const noThreeIncrementNumber = pinGenerator.noThreeIncrementNumber(testPin)

    //Assert
    expect(noThreeIncrementNumber).toBe(false)
})

test('Three consecutive digits should not be incremental (e.g. 1236 is invalid)', () => {
    //Act
    const testPin = [1,2,5,4]
    const noThreeIncrementNumber = pinGenerator.noThreeIncrementNumber(testPin)

    //Assert
    expect(noThreeIncrementNumber).toBe(true)
})

test('Is a pin valid', () => {
    //Act
    const testPin = [6,2,3,5]
    const canAddToBatch = pinGenerator.isValidPin(testPin)

    //Assert
    expect(canAddToBatch).toBe(true)
})

test('Is not a pin valid', () => {
    //Act
    const testPin = [6,2,2,5]
    const canAddToBatch = pinGenerator.isValidPin(testPin)

    //Assert
    expect(canAddToBatch).toBe(false)
})

test('Create array of 1000 pin codes', () => {
    //Act
    const testPin = []
    testPin.length = 1000
    const thousandPincodes = pinGenerator.generatePins(testPin)

    //Assert
    expect(thousandPincodes.length).toEqual(1000)
})

test('only valid PIN code and not duplicate PIN will add to the newPinsBatch', () => {
    //Act
    const validPins = pinGenerator.createValidPin()

    //Assert
    expect(validPins.length).toBe(4)
})

// 1. function to create array of 1000 pin codes
// 2. check if the pin is a valid pin 
// 3. if the pin is valid, store into pins batch
// 4. remove if pins batch contain current pin
// 5. keep adding until the array is fill with 1000 pin
// Each PIN code in the batch should be valid, and unique
// 6. print all the pin

