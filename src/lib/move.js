export default (keyClick, player, canvas) => {
  if (37 in keyClick) {
    player.x -= player.speed
    player.pacY = 64
  }
  if (38 in keyClick) {
    player.y -= player.speed
    player.pacY = 96
  }
  if (39 in keyClick) {
    player.x += player.speed
    player.pacY = 0
  }
  if (40 in keyClick) {
    player.y += player.speed
    player.pacY = 32
  }

  if (player.x >= canvas.width + 1) { player.x = -20 }
  if (player.x <= -30) { player.x = canvas.width }
  if (player.y <= -30) { player.y = canvas.height }
  if (player.y >= canvas.height + 1) { player.y = -20 }

  player.pacX = player.pacX === 320 ? 352 : 320
}