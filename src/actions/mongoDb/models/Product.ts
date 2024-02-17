import mongoose from 'mongoose';

const { Schema } = mongoose;

const asgGroductSchema = new Schema({
  code: { type: String, required: true },
  category: { type: String, required: true },
  article: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  brandGroup: { type: String, required: true },
  brandArticle: { type: String, required: true },
  price: { type: String, required: true },
  availability: { type: String, required: true },
});

export default mongoose.models.ASGproduct ||
  mongoose.model('ASGproduct', asgGroductSchema);
