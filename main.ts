class Options {
    static PASTPACKETSLENGTH = 100
    static RADIOBUFFERLENGTH = 16
    static REGISTEREDSENSORSLENGTH = 16
}

class MySensor {
    // assign id's to onboard sensors
    static STATION = 0
    static LIGHT = 1
    static COMPASS = 2
    static TEMPER = 3
    static ROLL = 4
    static PITCH = 5
    static ACCX = 6
    static ACCY = 7
    static ACCZ = 8
    static ROTX = 9
    static ROTY = 10
    static ROTZ = 11
    static MAGX = 12
    static MAGY = 13
    static MAGZ = 14
}

// class SensorFuncs:
//     @staticmethod
function getLight(): number {
    return input.lightLevel()
}

//     @staticmethod
function getCompass(): number {
    return input.compassHeading()
}

//     @staticmethod
function getTemp(): number {
    return input.temperature()
}

function getRoll(): number {
    return input.rotation(Rotation.Roll)
}

function getPitch(): number {
    return input.rotation(Rotation.Pitch)
}

function getAccX(): number {
    return input.acceleration(Dimension.X)
}

function getAccY(): number {
    return input.acceleration(Dimension.Y)
}

function getAccZ(): number {
    return input.acceleration(Dimension.Z)
}

function getAccStrength(): number {
    return input.acceleration(Dimension.Strength)
}

function getMagX(): number {
    return input.magneticForce(Dimension.X)
}

function getMagY(): number {
    return input.magneticForce(Dimension.Y)
}

function getMagZ(): number {
    return input.magneticForce(Dimension.Z)
}

function SensorError(): number {
    console.log("ERROR Sensor Code")
    return 0
}

function MySensorFunc(func: number): number {
    if (func == MySensor.LIGHT) {
        return getLight()
    } else if (func == MySensor.COMPASS) {
        return getCompass()
    } else if (func == MySensor.TEMPER) {
        return getTemp()
    } else if (func == MySensor.ROLL) {
        return getRoll()
    } else if (func == MySensor.PITCH) {
        return getPitch()
    } else if (func == MySensor.ACCX) {
        return getAccX()
    } else if (func == MySensor.ACCY) {
        return getAccY()
    } else if (func == MySensor.ACCZ) {
        return getAccZ()
    } else if (func == MySensor.MAGX) {
        return getMagX()
    } else if (func == MySensor.MAGY) {
        return getMagY()
    } else if (func == MySensor.MAGZ) {
        return getMagZ()
    } else {
        return SensorError()
    }
    
}

// def boolarrayToHex(arr):    #static methods do not use 'self' parameter
//     tt = map(int, arr)
//     n = int(''.join(map(str,tt)),2)
//     return '{:02x}'.format(n).lstrip()
// print(str(Options.PASTPACKETSLENGTH))
// print(str(Options.RADIOBUFFERLENGTH))
// print(str(Options.REGISTEREDSENSORSLENGTH))
console.log("" + MySensorFunc(MySensor.PITCH))
