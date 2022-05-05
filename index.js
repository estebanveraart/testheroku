const express = require('express')
const res = require('express/lib/response')
const app = express()
const posts = require('./post')

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/', (req, res) => {
    res.send(('api is running'))
})

app.listen(process.env.PORT || 3000, () => console.log('server is running'))