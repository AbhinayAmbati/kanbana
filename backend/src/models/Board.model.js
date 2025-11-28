const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a board title'],
    trim: true,
    maxlength: [100, 'Board title cannot be more than 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'member', 'viewer'],
      default: 'member'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  background: {
    type: {
      type: String,
      enum: ['color', 'gradient', 'image'],
      default: 'gradient'
    },
    value: {
      type: String,
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  },
  starred: {
    type: Boolean,
    default: false
  },
  archived: {
    type: Boolean,
    default: false
  },
  settings: {
    enableAutomations: {
      type: Boolean,
      default: true
    },
    enableAI: {
      type: Boolean,
      default: true
    },
    visibility: {
      type: String,
      enum: ['private', 'workspace', 'public'],
      default: 'workspace'
    }
  },
  labels: [{
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

// Indexes
boardSchema.index({ workspace: 1 });
boardSchema.index({ owner: 1 });
boardSchema.index({ 'members.user': 1 });
boardSchema.index({ archived: 1 });

module.exports = mongoose.model('Board', boardSchema);
