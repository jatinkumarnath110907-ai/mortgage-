import mongoose from 'mongoose';

const mortgageSchema = new mongoose.Schema({
  principal: Number,
  annualInterest: Number,
  years: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

export const Mortgage = mongoose.models.Mortgage || mongoose.model('Mortgage', mortgageSchema);
