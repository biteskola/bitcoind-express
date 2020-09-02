const Client = require('bitcoin-core')
const fs = require('fs')
const express = require('express')
const app = express()

const auth = fs.readFileSync('../../.bitcoin/regtest/.cookie',
  { encoding: 'utf8' }).split(":");

const client = new Client({
  network: 'regtest',
  port: 18443,
  host: 'localhost',
  username: auth[0],
  password: auth[1]
})

app.get('/', async function (req, res) {
  try {
    const blockcount = await client.getBlockCount()
    res.send({ blockcount })
    return a
  } catch (e) {
    console.log('\n    Error Bitcoin getblockcount', e)
  }
})

app.listen(3000)
