const { Schema, model } = required("mongoose");

const TokenSchema = new Schema({
  refreshToken: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Token", TokenSchema);
