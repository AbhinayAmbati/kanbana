const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a card title'],
    trim: true,
    maxlength: [200, 'Card title cannot be more than 200 characters']
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  column: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
    required: true
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
  
  // Assignment
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  watchers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Labels
  labels: [{
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }],
  
  // Priority
  priority: {
    type: String,
    enum: ['none', 'low', 'medium', 'high', 'urgent'],
    default: 'none'
  },
  
  // Dates
  dueDate: {
    type: Date,
    default: null
  },
  startDate: {
    type: Date,
    default: null
  },
  completedAt: {
    type: Date,
    default: null
  },
  
  // Checklists
  checklists: [{
    title: {
      type: String,
      required: true
    },
    items: [{
      text: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
      },
      completedAt: {
        type: Date,
        default: null
      }
    }]
  }],
  
  // Attachments
  attachments: [{
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Custom Fields
  customFields: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['text', 'number', 'date', 'select', 'checkbox'],
      required: true
    },
    value: {
      type: mongoose.Schema.Types.Mixed
    }
  }],
  
  // Dependencies
  dependencies: [{
    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
      required: true
    },
    type: {
      type: String,
      enum: ['blocks', 'blocked-by', 'related'],
      required: true
    }
  }],
  
  // Sub-board (for complex tasks)
  hasSubBoard: {
    type: Boolean,
    default: false
  },
  subBoard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    default: null
  },
  
  // AI
  aiGenerated: {
    type: Boolean,
    default: false
  },
  aiSummary: {
    type: String,
    default: null
  },
  
  // Cover image
  cover: {
    type: String,
    default: null
  },
  
  // Archived
  archived: {
    type: Boolean,
    default: false
  },
  
  // Creator
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Indexes for performance
cardSchema.index({ board: 1, column: 1, position: 1 });
cardSchema.index({ assignedTo: 1 });
cardSchema.index({ dueDate: 1 });
cardSchema.index({ createdBy: 1 });
cardSchema.index({ archived: 1 });

// Virtual for checklist progress
cardSchema.virtual('checklistProgress').get(function() {
  if (!this.checklists || this.checklists.length === 0) {
    return { total: 0, completed: 0, percentage: 0 };
  }
  
  const allItems = this.checklists.reduce((acc, checklist) => {
    return acc.concat(checklist.items);
  }, []);
  
  const total = allItems.length;
  const completed = allItems.filter(item => item.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return { total, completed, percentage };
});

// Ensure virtuals are included in JSON
cardSchema.set('toJSON', { virtuals: true });
cardSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Card', cardSchema);
