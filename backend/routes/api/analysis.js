const express = require('express');
const mongoose = require('mongoose');
const Article = require('../../models/Articles');
const router = express.Router();


router.put('/analysis', async (req, res) => {
  try {
    const { analysis } = req.body;
    if (!analysis) {
      return res.status(400).send({ error: 'Analysis data is required.' });
    }
    await Article.findByIdAndUpdate(req.params.id, { analysis: analysis });
    res.status(200).send({ message: 'Analysis saved successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to save the analysis.' });
  }
});

module.exports = router;
