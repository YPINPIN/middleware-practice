// 格式化時間
function formatTime(time) {
  const timeString = `${time.getFullYear()}-${padStart(time.getMonth() + 1)}-${padStart(time.getDate())} ${padStart(time.getHours())}:${padStart(time.getMinutes())}:${padStart(time.getSeconds())}`
  return timeString
}

// 十位數補零
function padStart(number) {
  return number.toString().padStart(2, 0)
}

module.exports = {
  formatTime
}