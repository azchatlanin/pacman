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
}