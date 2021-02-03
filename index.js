const express = require('express')
const app = express()

app.use(express.Router())
app.use(express.json())

app.listen(8000, () => {
  console.log('listening on port 8080')
})
