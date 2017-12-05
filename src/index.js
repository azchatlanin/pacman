import Enemy from './pers/enemy'
import powerdot from './pers/powerdot'
import player from './pers/player'
import render from './lib/render'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const enemy = Enemy()

const data = {
  pscore: 0,
  gscore: 0
}

const resizeCanvas = () => {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  render(ctx, canvas, player, enemy, powerdot, data.pscore, data.gscore)
  requestAnimationFrame(resizeCanvas)
}

resizeCanvas()

document.body.appendChild(canvas)