input.onButtonPressed(Button.A, function () {
    사람.change(LedSpriteProperty.X, -1)
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    사람.change(LedSpriteProperty.X, 1)
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
})
let 사람: game.LedSprite = null
for (let index = 0; index < 2; index++) {
    music.playMelody("C D E F G A B C5 ", 255)
}
basic.showString("APPLEGAME")
사람 = game.createSprite(2, 4)
let 사과 = game.createSprite(randint(0, 4), 0)
game.setLife(3)
basic.forever(function () {
    if (game.score() < 5) {
        for (let index = 0; index < 4; index++) {
            사과.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        if (사과.isTouching(사람)) {
            game.addScore(1)
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(587, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        } else {
            game.removeLife(1)
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        }
    }
    for (let index = 0; index < 0; index++) {
        if (game.isGameOver()) {
            music.playMelody("C5 B A G F E D C ", 255)
            music.playMelody("C D E F G A B C5 ", 255)
            music.playTone(415, music.beat(BeatFraction.Double))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(370, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
})
basic.forever(function () {
    if (5 <= game.score() && game.score() < 10) {
        for (let index = 0; index < 4; index++) {
            사과.change(LedSpriteProperty.Y, 1)
            basic.pause(400)
        }
        if (사과.isTouching(사람)) {
            game.addScore(1)
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(587, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        } else {
            game.removeLife(1)
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (game.isGameOver()) {
            music.playMelody("C5 B A G F E D C ", 259)
            music.playMelody("C D E F G A B C5 ", 255)
            music.playTone(415, music.beat(BeatFraction.Double))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(370, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
})
basic.forever(function () {
    if (10 <= game.score() && game.score() < 20) {
        for (let index = 0; index < 4; index++) {
            사과.change(LedSpriteProperty.Y, 1)
            basic.pause(300)
        }
        if (사과.isTouching(사람)) {
            game.addScore(1)
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(587, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        } else {
            game.removeLife(1)
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (game.isGameOver()) {
            music.playMelody("C5 B A G F E D C ", 255)
            music.playMelody("C D E F G A B C5 ", 255)
            music.playTone(415, music.beat(BeatFraction.Double))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(370, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
})
basic.forever(function () {
    if (20 <= game.score()) {
        for (let index = 0; index < 4; index++) {
            사과.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        if (사과.isTouching(사람)) {
            game.addScore(1)
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(587, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        } else {
            game.removeLife(1)
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Eighth))
            사과.delete()
            사과 = game.createSprite(randint(0, 4), 0)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (game.isGameOver()) {
            music.playMelody("C5 B A G F E D C ", 255)
            music.playMelody("C D E F G A B C5 ", 255)
            music.playTone(415, music.beat(BeatFraction.Double))
            music.playTone(392, music.beat(BeatFraction.Double))
            music.playTone(370, music.beat(BeatFraction.Double))
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
})
