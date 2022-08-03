const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'must provide name-prenom-nombre'],
      trim: true,
      maxlength: [20, 'name cannot exceed 20 characters']
  }, completed: {
      type: Boolean,
      default: false,
  }  
});

module.exports = mongoose.model('Task', TaskSchema)