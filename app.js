const express = require('express')
const app = express()
const port = 3000
// timeHelpers
const timeHelpers = require('./tools/timeHelpers')

// 新增Middleware 顯示請求資訊
app.use(function (req, res, next) {
  const time = new Date()
  const timeString = timeHelpers.formatTime(time)
  // const timeString = time.toString()
  const type = req.method
  const url = req.originalUrl
  console.log(`${timeString} | ${type} from ${url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
