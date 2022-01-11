const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})