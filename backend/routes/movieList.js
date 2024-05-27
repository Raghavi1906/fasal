const express = require('express');
const MovieList = require('../models/MovieList');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.post('/', verifyToken, async (req, res) => {
  const { name, movies, isPublic } = req.body;
  const newList = new MovieList({ userId: req.user.id, name, movies, isPublic });

  try {
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', verifyToken, async (req, res) => {
  try {
    const lists = await MovieList.find({ userId: req.user.id });
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
