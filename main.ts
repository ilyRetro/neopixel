input.onButtonPressed(Button.A, function () {
    Luces.showRainbow(1, 360)
    Luces.show()
})
input.onButtonPressed(Button.B, function () {
    Luces.showColor(neopixel.colors(NeoPixelColors.Green))
    Luces.show()
})
let Luces: neopixel.Strip = null
Luces = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
