const mongoose = require('mongoose');

const automationSchema = new mongoose.Schema({
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Automation name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  enabled: {
    type: Boolean,
    default: true
  },
  
  // Trigger configuration
  trigger: {
    type: {
      type: String,
      required: true,
      enum: [
        'card_created',
        'card_moved',
        'card_updated',
        'due_date_approaching',
        'checklist_completed',
        'label_added',
        'member_assigned',
        'comment_added'
      ]
    },
    conditions: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  
  // Action configuration
  action: {
    type: {
      type: String,
      required: true,
      enum: [
        'assign_member',
        'add_label',
        'move_card',
        'send_notification',
        'add_comment',
        'set_due_date',
        'archive_card',
        'create_card',
        'add_checklist'
      ]
    },
    parameters: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  },
  
  // Statistics
  executionCount: {
    type: Number,
    default: 0
  },
  lastExecuted: {
    type: Date,
    default: null
  },
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Indexes
automationSchema.index({ board: 1, enabled: 1 });
automationSchema.index({ 'trigger.type': 1 });

module.exports = mongoose.model('Automation', automationSchema);
