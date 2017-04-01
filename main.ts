let isOn = 0

input.onButtonPressed(Button.B, () => {
    if (isOn == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        isOn = 1
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        isOn = 0
    }
})

basic.forever(() => {
    // gtsoft.test.printString("Hello JavaScript!!!", 300)
    // basic.pause(500)
    // gtsoft.test.printString("Hello Glen!!!", 300)
    // basic.pause(500)
    // gtsoft.test.turnOn(250)
    // gtsoft.test.turnOff(250)
})
