const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: [
      'card_created',
      'card_updated',
      'card_moved',
      'card_archived',
      'card_deleted',
      'comment_added',
      'comment_updated',
      'comment_deleted',
      'member_added',
      'member_removed',
      'label_added',
      'label_removed',
      'attachment_added',
      'attachment_removed',
      'checklist_added',
      'checklist_item_completed',
      'due_date_added',
      'due_date_changed',
      'board_created',
      'board_updated',
      'column_created',
      'column_updated',
      'column_deleted'
    ]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    default: null
  },
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    default: null
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    default: null
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true
});

// Indexes
activitySchema.index({ board: 1, createdAt: -1 });
activitySchema.index({ card: 1, createdAt: -1 });
activitySchema.index({ workspace: 1, createdAt: -1 });
activitySchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Activity', activitySchema);
