module.exports = (mongoose) => {
  const User = mongoose.model(
    'users',
    mongoose.Schema({
      username: String,
      googleId: String
    })
  );

  return User;
};
