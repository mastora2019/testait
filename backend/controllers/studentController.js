// Dummy data for illustration purposes
const groups = [
    { _id: '1', name: 'Study Group', description: 'Group for collaborative studying' },
    { _id: '2', name: 'Sports Club', description: 'Group for sports enthusiasts' },
  ];
  
  exports.getAllGroups = (req, res) => {
    res.json(groups);
  };
  
  exports.joinGroup = (req, res) => {
    const groupId = req.params.groupId;
    // Dummy implementation - add the user to the group
    res.json({ success: true, message: `Joined the group with ID ${groupId}` });
  };
  