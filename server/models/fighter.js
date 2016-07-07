import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  power: { type: Number, default: 100 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  health: { type: Number, default: 100 },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fighter', schema);
