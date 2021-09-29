const { Schema, model } = required("mongoose");

const UserSchema = new Schema({
  email: { type: "string", unique: true, required: true },
  password: { type: "string", required: true },
});

module.exports = model('User', UserSchema);