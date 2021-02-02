namespace mysensors {
    //  Add your code here
    export class MySensor {
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
    
    export function getLight(): number {
        return input.lightLevel()
    }
    
    export function getCompass(): number {
        return input.compassHeading()
    }
    
    export function getTemp(): number {
        return input.temperature()
    }
    
    export function getRoll(): number {
        return input.rotation(Rotation.Roll)
    }
    
    export function getPitch(): number {
        return input.rotation(Rotation.Pitch)
    }
    
    export function getAccX(): number {
        return input.acceleration(Dimension.X)
    }
    
    export function getAccY(): number {
        return input.acceleration(Dimension.Y)
    }
    
    export function getAccZ(): number {
        return input.acceleration(Dimension.Z)
    }
    
    export function getAccStrength(): number {
        return input.acceleration(Dimension.Strength)
    }
    
    export function getMagX(): number {
        return input.magneticForce(Dimension.X)
    }
    
    export function getMagY(): number {
        return input.magneticForce(Dimension.Y)
    }
    
    export function getMagZ(): number {
        return input.magneticForce(Dimension.Z)
    }
    
    export function SensorError(): number {
        console.log("ERROR Sensor Code")
        return 0
    }
    
}
