
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */


/**
 * GTSoft custom functions
 */
//% weight=100 color=#0fbc11 icon=""
namespace gtsoft.test {
    /**
     * Prints a string character at a time
     * @param s the string to print
     * @param w the time between characters in milliseconds
     */
    //% block
    export function printString(s: string, w: uint16): void {
        for (let i = 0; i < s.length; i++) {
            basic.showString(s[i])
            basic.pause(w)
        }
    }

    /**
     * turns on a digital pin for a number of milliseconds
     * @param w the time to turn on the pin
     */
    //% block
    export function turnOn(w: number): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(w)
    }

     /**
     * turns off a digital pin for a number of milliseconds
     * @param w the time to turn on the pin
     */
    //% block
    export function turnOff(w: number): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(w)
    }
   
}
