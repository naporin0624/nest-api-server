import * as mongoose from "mongoose";

export const TagsSchema = new mongoose.Schema({
  readTime: String,
  tags: [
    {
      tagId: String,
      antennaNo: Number,
      rssi: Number,
      frequency: Number,
      phase: Number,
      doppler: Number,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
