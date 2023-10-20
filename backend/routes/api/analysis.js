const express = require('express');
const mongoose = require('mongoose');
const Article = require('../../models/Articles');

const router = express.Router();

router.put('/addInfo/:title', async (req, res) => {
  try {
    const { extractedData } = req.body;
    await Article.findOneAndUpdate({ title: req.params.title }, { analysisData: extractedData });

    res.status(200).send({ message: 'Analysis information added.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to add analysis information.' });
  }
});

module.exports = router;
