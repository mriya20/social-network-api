const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    // Add indvidual properties and their types
    username: {
      type: String,
      unique: true, // unique index
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // matches a valid email address
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
  },
  {
    // Schema option to transform Objects after querying th e default behavior
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// Virtual called 'friendCount' - retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initializes the User model
const User = model('User', userSchema);

module.exports = User;
