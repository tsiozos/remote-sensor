namespace numconv {
    //  Add your code here
    export function toHex(dec: number): string {
        let digits = "0123456789ABCDEF"
        let x = dec % 16
        let rest = Math.idiv(dec, 16)
        let s = digits[x]
        while (rest > 0) {
            x = rest % 16
            rest = Math.idiv(rest, 16)
            s = digits[x] + s
        }
        return s
    }
    
    export function toBin(dec: number): string {
        let digits = "01"
        let x = dec % 2
        let rest = Math.idiv(dec, 2)
        let s = digits[x]
        while (rest > 0) {
            x = rest % 2
            rest = Math.idiv(rest, 2)
            s = digits[x] + s
        }
        return s
    }
    
}
