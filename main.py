StationID = 0


def showStationID():
    global StationID
    ids = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    basic.show_string(ids[StationID],200)

def emptyKeyBuffer():
    while input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B) or input.button_is_pressed(Button.AB):
        pass

def SetupStationID():
    global StationID
    print("Entering setup:")
    emptyKeyBuffer()
    showStationID()
    while True:
        
        if input.button_is_pressed(Button.A) and not input.button_is_pressed(Button.B):
            StationID = max(0, StationID-1)
            showStationID()
        elif input.button_is_pressed(Button.B) and not input.button_is_pressed(Button.A):
            StationID = min(35,StationID+1)
            showStationID()
        elif input.button_is_pressed(Button.AB):
            emptyKeyBuffer()
            return

showStationID()

while True:
    if input.button_is_pressed(Button.AB):
        SetupStationID()
        basic.clear_screen()
