input.onButtonPressed(Button.A, () => {
    basic.showString("Button Pressed!!")
    basic.pause(500)
})

input.onButtonPressed(Button.B, () => {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
})

basic.forever(() => {
    gtsoft.test.printString("Hello JavaScript!!!")
    basic.pause(500)
    gtsoft.test.printString("Hello Glen!!!")
    basic.pause(500)
})
