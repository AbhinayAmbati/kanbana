const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a column title'],
    trim: true,
    maxlength: [50, 'Column title cannot be more than 50 characters']
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  position: {
    type: Number,
    required: true,
    default: 0
  },
  wipLimit: {
    type: Number,
    default: null // null means no limit
  },
  color: {
    type: String,
    default: '#6b7280'
  }
}, {
  timestamps: true
});

// Indexes
columnSchema.index({ board: 1, position: 1 });

module.exports = mongoose.model('Column', columnSchema);
