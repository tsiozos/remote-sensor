import numconv.toBin
from numconv import *

class Options:
    PASTPACKETSLENGTH = 100
    RADIOBUFFERLENGTH = 16
    REGISTEREDSENSORSLENGTH = 16

class MySensor:    #assign id's to onboard sensors
    STATION = 0
    LIGHT=1
    COMPASS=2
    TEMPER=3
    ROLL=4
    PITCH=5
    ACCX=6
    ACCY=7
    ACCZ=8
    ROTX=9
    ROTY=10
    ROTZ=11
    MAGX=12
    MAGY=13
    MAGZ=14

#class SensorFuncs:
#    @staticmethod
def getLight():
    return input.light_level()
#    @staticmethod
def getCompass():
    return input.compass_heading()
#    @staticmethod
def getTemp():
    return input.temperature()

def getRoll():
    return input.rotation(Rotation.ROLL)

def getPitch():
    return input.rotation(Rotation.PITCH)

def getAccX():
    return input.acceleration(Dimension.X)

def getAccY():    
    return input.acceleration(Dimension.Y)

def getAccZ():    
    return input.acceleration(Dimension.Z)

def getAccStrength():    
    return input.acceleration(Dimension.STRENGTH)

def getMagX():
    return input.magnetic_force(Dimension.X) 

def getMagY():
    return input.magnetic_force(Dimension.Y)

def getMagZ():
    return input.magnetic_force(Dimension.Z)

def SensorError():
    print("ERROR Sensor Code")
    return 0

def MySensorFunc(func):
    if func == MySensor.LIGHT: return getLight()
    elif func == MySensor.COMPASS: return getCompass()
    elif func == MySensor.TEMPER: return getTemp()
    elif func == MySensor.ROLL: return getRoll()
    elif func == MySensor.PITCH: return getPitch()
    elif func == MySensor.ACCX: return getAccX()
    elif func == MySensor.ACCY: return getAccY()
    elif func == MySensor.ACCZ: return getAccZ()
    elif func == MySensor.MAGX: return getMagX()
    elif func == MySensor.MAGY: return getMagY()
    elif func == MySensor.MAGZ: return getMagZ()
    else: return SensorError()

#def boolarrayToHex(arr):    #static methods do not use 'self' parameter
#    tt = map(int, arr)
#    n = int(''.join(map(str,tt)),2)
#    return '{:02x}'.format(n).lstrip()

#print(str(Options.PASTPACKETSLENGTH))
#print(str(Options.RADIOBUFFERLENGTH))
#print(str(Options.REGISTEREDSENSORSLENGTH))
print(str(MySensorFunc(MySensor.PITCH)))

