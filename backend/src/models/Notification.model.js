const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'card_assigned',
      'card_mentioned',
      'comment_added',
      'comment_mentioned',
      'due_date_reminder',
      'card_moved',
      'member_added',
      'workspace_invite',
      'board_invite'
    ]
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: null
  },
  read: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date,
    default: null
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  relatedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  relatedCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    default: null
  },
  relatedBoard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    default: null
  }
}, {
  timestamps: true
});

// Indexes
notificationSchema.index({ user: 1, read: 1, createdAt: -1 });
notificationSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);
