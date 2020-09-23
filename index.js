const express = require('express')
const app = express()
const Client = require('bitcoin-core');
const fs = require('fs')

const auth = fs.readFileSync('../../.bitcoin/regtest/.cookie', { encoding: 'utf8'}).split(':')
const client = new Client({ 
    port: 18443,
    username: auth[0],
    password: auth[1]
 });

app.use((req, res, next) => {
  // Desde donde llamamos a la API en express
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080') 
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})


app.get('/', async function (req, res) {
  try {
    const blockcount = await client.getBlockCount()
    res.send({ blockcount })
  } catch (e) {
      console.log('E', e)
  }

})
 
app.listen(3000)