const canvas = document.querySelector('canvas')
const c = canavs.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canavs.width, canavas.height)

class Sprite {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(fill.position.x, this.position.y, 50, 150)
    }
}

const player = new Sprite ({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})

function animate() {
    window.requestAnimationFrame(animate)
}

animate()