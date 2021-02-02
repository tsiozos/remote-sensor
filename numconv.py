# Add your code here
def toHex(dec):
    digits = "0123456789ABCDEF"
    x = dec % 16
    rest = dec // 16
    s = digits[x]
    while rest > 0:
        x = rest % 16
        rest = rest // 16
        s = digits[x]+s
    return s

def toBin(dec):
    digits = "01"
    x = dec % 2
    rest = dec // 2
    s = digits[x]
    while rest > 0:
        x = rest % 2
        rest = rest // 2
        s = digits[x]+s
    return s