const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  location_id: { type: Number, required: true },
  city_id: { type: Number, required: true },
  locality: { type: String, required: true },
  thumb: { type: [String], default: [] },
  aggregate_rating: { type: Number, required: true },
  rating_text: { type: String, required: true },
  min_price: { type: Number, required: true },
  contact_number: { type: String },
  cuisine: { type: [String], default: [] },
  image: { type: String },
  mealtype_id: { type: Number },
});

const restaurentModel = mongoose.model("restaurent", restaurantSchema);

module.exports = restaurentModel;
