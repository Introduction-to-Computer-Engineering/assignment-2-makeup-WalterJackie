// calculate move up then reset to face forword
input.onButtonPressed(Button.A, function () {
    player.turnLeft(90)
    player.move(1)
    player.turnRight(90)
    if (player.get(LedSpriteProperty.Y) == 0) {
        player.turnRight(90)
        player.move(1)
        player.turnLeft(90)
    }
})
// calculate move down then reset to face forword
input.onButtonPressed(Button.B, function () {
    player.turnRight(90)
    player.move(1)
    player.turnLeft(90)
})
// fire projectile
input.onButtonPressed(Button.AB, function () {
    prog = game.createSprite(1, player.get(LedSpriteProperty.Y))
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        prog.move(1)
        basic.pause(400)
    }
    prog.delete()
})

//global var
let kills = 0
let prog: game.LedSprite = null
let player: game.LedSprite = null
let enmy: game.LedSprite = null

//creat player
player = game.createSprite(0, 2)
basic.pause(800)

//enmy loop
for (let index = 0; index < 4; index++) {
    enmy = game.createSprite(4, Math.randomRange(1, 4))
    basic.pause(1000)
    enmy.turnLeft(180);
    for (let index = 0; index < 4; index++) {
        enmy.move(1)
        basic.pause(1000)
        if (player.isTouching(enmy)) {
            control.reset()
        }
        if (prog.isTouching(enmy)) {
            kills += 1
            enmy.delete()
        }
    }
    basic.pause(100)
    enmy.delete()
}

//scoor keeper
basic.forever(function () {
    if (kills == 1) {
        led.plot(4, 0)
    } else if (kills == 2) {
        led.plot(3, 0)
        led.plot(4, 0)
    } else if (kills == 3) {
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
    } else if (kills == 4) {
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
    } else {

    }

})
