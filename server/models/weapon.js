import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  power: { type: Number, default: 100 },
  recharge: { type: Number, default: 1000 },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weapon', schema);
