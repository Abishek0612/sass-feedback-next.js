export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IFeedbackRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

export interface Feedback {
  _id: string;
  category: string;
  comments: Comment[];
  upvotes: number;
  title: string;
  description: string;
  featureType: string;
  commentsCount: number;
}
