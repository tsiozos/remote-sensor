let StationID = 0
function showStationID() {
    
    let ids = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    basic.showString(ids[StationID], 200)
}

function emptyKeyBuffer() {
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)) {
        
    }
}

function SetupStationID() {
    
    console.log("Entering setup:")
    emptyKeyBuffer()
    showStationID()
    while (true) {
        if (input.buttonIsPressed(Button.A) && !input.buttonIsPressed(Button.B)) {
            StationID = Math.max(0, StationID - 1)
            showStationID()
        } else if (input.buttonIsPressed(Button.B) && !input.buttonIsPressed(Button.A)) {
            StationID = Math.min(35, StationID + 1)
            showStationID()
        } else if (input.buttonIsPressed(Button.AB)) {
            emptyKeyBuffer()
            return
        }
        
    }
}

showStationID()
while (true) {
    if (input.buttonIsPressed(Button.AB)) {
        SetupStationID()
        basic.clearScreen()
    }
    
}
