// 格式化日期、時間：yyyy-MM-dd HH:mm:ss
function formatTime(time) {
  return `${toDateString(time)} ${toTimeString(time)}`
}

// 格式化日期：yyyy-MM-dd
function toDateString(time) {
  return `${time.getFullYear()}-${padStart(time.getMonth() + 1)}-${padStart(time.getDate())}`
}

// 格式化時間：HH:mm:ss
function toTimeString(time) {
  return `${padStart(time.getHours())}:${padStart(time.getMinutes())}:${padStart(time.getSeconds())}`
}

// 十位數補零
function padStart(number) {
  return number.toString().padStart(2, 0)
}

module.exports = {
  formatTime,
  toDateString,
  toTimeString
}