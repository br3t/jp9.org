const express = require('express');
const router = express.Router();
require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'jp9',
  password: process.env.DB_USER_PASSWORD,
  port: 5432,
})

/* GET home page. */
router.get('/', async (req, res) => {
  await pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * from websites', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      res.send(result.rows)
    })
  })
});

module.exports = router;
