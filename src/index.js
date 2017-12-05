import Enemy from './pers/enemy'
import powerdot from './pers/powerdot'
import player from './pers/player'
import render from './lib/render'
import move from './lib/move'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'img/pac.png'
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false)
  resizeCanvas()
}

const enemy = Enemy()

const data = {
  pscore: 0,
  gscore: 0
}

const keyClick = {}
document.addEventListener('keydown', (event) => {
  keyClick[event.keyCode] = true  
  move(keyClick, player, canvas)
})

document.addEventListener('keyup', (event) => {
  delete keyClick[event.keyCode]  
})

const resizeCanvas = () => {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  render(ctx, canvas, player, enemy, powerdot, data.pscore, data.gscore, image)
  requestAnimationFrame(resizeCanvas)
}

document.body.appendChild(canvas)