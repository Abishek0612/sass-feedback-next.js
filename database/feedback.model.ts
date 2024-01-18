import { Document, Schema, model, models } from "mongoose";

interface IUser extends Document {
  image: string;
  name: string;
  username: string;
}

interface IReply extends Document {
  content: string;
  replyingTo: string;
  user: IUser;
}

interface IComment extends Document {
  id: number;
  content: string;
  user: IUser;
  replies: IReply[];
}

interface IFeedbackRequest extends Document {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: IComment[];
}

const userSchema = new Schema<IUser>({
  image: String,
  name: String,
  username: String,
});

const replySchema = new Schema<IReply>({
  content: { type: String, required: true },
  replyingTo: { type: String, required: true },
  user: userSchema,
});

const commentSchema = new Schema<IComment>({
  id: { type: Number, required: true },
  content: { type: String, required: true },
  user: userSchema,
  replies: [replySchema],
});

const feedbackRequestSchema = new Schema<IFeedbackRequest>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  upvotes: { type: Number, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  comments: [commentSchema],
});

const FeedbackRequest =
  models.FeedbackRequest ||
  model<IFeedbackRequest>("FeedbackRequest", feedbackRequestSchema);

export default FeedbackRequest;
