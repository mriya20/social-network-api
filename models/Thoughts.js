const { Schema, model, Types } = require('mongoose');

// Schema to create Thoughts model
const reactionSchema = new Schema(
  {
    reactionId: {
      // Uses Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
        // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
        // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
      }

    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: Date,

    },
    // Array of nested documents created with the `reactionSchema`.
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Creates a virtual property `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// thoughtSchema.path('createdAt').get(function (createdAt) {
//   // return createdAt.toLocaleString();
//   return moment(createdAt).format('MMM DD, YYYY [at] hh:mm a')
// })

// thoughtSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

// Initialize our Thought model.
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
