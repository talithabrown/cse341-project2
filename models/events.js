module.exports = (mongoose) => {
  const Event = mongoose.model(
    'events',
    mongoose.Schema(
      {
        title: String,
        date: String,
        time: String,
        city: String,
        zip_code: String,
        address: String,
        description: String
      },
      { versionKey: false }
      //{ timestamps: true }
    )
  );

  return Event;
};
