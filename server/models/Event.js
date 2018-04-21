// server/models/Event.js
/*** Event Model ***/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MongoDB object IDs are automatocally generated
// There is no need to add them manually to the schema (in this case)
const eventSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  startDatetime: { type: Date, required: true },
  endDatetime: { type: Date, required: true },
  description: String,
  viewPublic: { type: Boolean, required: true}
});

module.exports = mongoose.model('Event', eventSchema);