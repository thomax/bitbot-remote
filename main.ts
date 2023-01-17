input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stop")
})
radio.setGroup(100)
