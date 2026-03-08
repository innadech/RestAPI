const express = require('express')
const router = express.Router()

// GET all
router.get('/', (req, res) => {
  res.json({ message: 'GET all items' })
})

// GET by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `GET item by id: ${id}` })
})

// POST
router.post('/', (req, res) => {
  const data = req.body
  res.status(201).json({ message: 'POST new item', data })
})

// PUT (частичное обновление)
router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `PUT (replace) item ${id}` })
})

// PATCH (полное обновление)
router.patch('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `PATCH (update) item ${id}` })
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `DELETE item ${id}` })
})

module.exports = router
