
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace gtsoft.test {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function printString(s: string): void {
        for (let i = 0; i < s.length; i++) {
            basic.showString(s[i])
            basic.pause(300)
        }
    }
}
