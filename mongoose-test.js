/* eslint-disable @typescript-eslint/no-var-requires */

const mongoose = require("mongoose");
const {
  subHours,
  subMinutes
} = require("date-fns");

(async () => {
  await mongoose.connect("mongodb://mongo.nm.cs.uec.ac.jp:27017/mimamori", {
    useNewUrlParser: true,
    user: "numalab",
    pass: "Numa0Lab",
  });
  const TagsSchema = new mongoose.Schema({
    readTime: String,
    tags: [{
      tagId: String,
      antennaNo: Number,
      rssi: Number,
      frequency: Number,
      phase: Number,
      doppler: Number,
    }, ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const RfidTags = mongoose.model("RfidTags", TagsSchema);
  let res = await RfidTags.aggregate([{
      $unwind: "$tags",
    },
    {
      $match: {
        "tags.antennaNo": 1,
        createdAt: {
          //$gte: subHours(new Date(), 1),
          $lt: new Date(),
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        createdAt: {
          $first: "$createdAt",
        },
        readTime: {
          $first: "$readTime",
        },
        // tags: {
        //   $push: {
        //     tags: "$tags"
        //   }
        // },
        tagCount: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
  ]);

  // where("tags.antennaNo", 3);
  // console.log(JSON.stringify(res))
  console.log(res[0], res[res.length - 1]);
})();