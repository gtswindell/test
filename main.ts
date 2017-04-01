// define our variable
let isOn = 0

// Make sure the pin is off to start with
pins.digitalWritePin(DigitalPin.P0, 0)

// set up the button press event
input.onButtonPressed(Button.B, () => {
    if (isOn == 0) {
        isOn = 1
    } else {
        isOn = 0
    }
    
    pins.digitalWritePin(DigitalPin.P0, isOn)
})



// basic.forever(() => {
//     gtsoft.test.printString("Hello JavaScript!!!", 300)
//     basic.pause(500)
//     gtsoft.test.printString("Hello Glen!!!", 300)
//     basic.pause(500)
//     gtsoft.test.turnOn(250)
//     gtsoft.test.turnOff(250)
// })
