const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get("/getallrooms", async (req, res) => {
     console.log(req.body);
     try {
          const sample = await Room.find({})
          res.send(sample)
     } catch (error) {
          return res.status(400).json({ message: 'something went wrong' });
     }
})

module.exports = router;