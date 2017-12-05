import rundomeFunc from './rundomeFunc'

export default (ctx, canvas, player, enemy, powerdot, pscore, gscore, image) => {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = '20px Verbana'

  ctx.fillStyle = 'white'
  ctx.fillText(`Человек: ${pscore} Сопливчик: ${gscore}`, 2, 20)  

  if (enemy.moving <= 0) {
    enemy.moving = rundomeFunc(30) * 3
    enemy.speed = rundomeFunc(3)
    enemy.dirX = 0
    enemy.dirY = 0

    if (enemy.moving % 2) {
      enemy.dirX = player.x < enemy.x ? -enemy.speed : enemy.speed
    } else {
      enemy.dirY = player.y < enemy.y ? -enemy.speed : enemy.speed
    }
  }
  enemy.moving--
  enemy.x += enemy.dirX
  enemy.y += enemy.dirY
  enemy.pacY = enemy.pacY === 0 ? enemy.pacY = 32 : enemy.pacY = 0

  ctx.drawImage(image, player.pacX, player.pacY, 32, 32, player.x, player.y, player.size, player.size)
  ctx.drawImage(image, enemy.pacX, enemy.pacY, 32, 32, enemy.x, enemy.y, enemy.size, enemy.size)  
} 