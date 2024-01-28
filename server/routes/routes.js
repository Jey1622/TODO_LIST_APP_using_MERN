const express = require("express");
const Task = require("../models/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const task = await Task.find({});
    res.json(task);
  } catch (error) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    await Task.create({
      todo: req.body.todo,
      isComplete: req.body.isComplete,
    });
    res.json({ msg: "data is created" });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, {
      todo: req.body.todo,
      isComplete: req.body.isComplete,
    });
    res.json({ msg: "data is updated" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "data is Deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
