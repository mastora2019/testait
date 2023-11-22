// controllers/groupsController.js

const Group = require('../models/group');

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createGroup = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newGroup = new Group({ name, description });
    const savedGroup = await newGroup.save();
    res.json(savedGroup);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getGroupById = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const { name, description } = req.body;
    const updatedGroup = await Group.findByIdAndUpdate(groupId, { name, description }, { new: true });
    if (!updatedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const deletedGroup = await Group.findByIdAndDelete(groupId);
    if (!deletedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(deletedGroup);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
