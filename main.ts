let fine_dust = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Dust(ug/m3): ")
    fine_dust = Environment.ReadDust(DigitalPin.P13, AnalogPin.P1)
    OLED.writeNum(fine_dust)
    if (fine_dust > 150) {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(2000)
})
