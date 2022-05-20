module.exports = (mongoose) => {
  const User = mongoose.model(
    'users',
    mongoose.Schema(
      {
        user_id: Number,
        first_name: String,
        last_name: String,
        email: String
      },
      { timestamps: true }
    )
  );

  return User;
};
