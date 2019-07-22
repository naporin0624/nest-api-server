import * as mongoose from 'mongoose';

export const TaglistSchema = new mongoose.Schema({
  readTime: String,
  time: Date,
  tag: [{
    rssi: Number,
    tagId: String,
    antennaNo: Number,
    frequency: Number,
    phase: Number,
    doppler: Number,
  }],
});
