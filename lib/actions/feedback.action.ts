"use server";

import { connectToDatabase } from "../mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import data from "../data.json";
import FeedbackRequest from "@/database/feedback.model";
import { ObjectId } from "mongoose";

const importData = async () => {
  try {
    await connectToDatabase();
    await FeedbackRequest.deleteMany();
    await FeedbackRequest.insertMany(data.productRequests);
    console.log("Data Import Successful");
  } catch (error) {
    console.error("Error during data import", error);
  }
};

importData();

export async function getFeedbackData(): Promise<any[]> {
  try {
    await connectToDatabase();
    const feedbackData = await FeedbackRequest.find().lean();
    return feedbackData.map((item) => ({
      ...item,
      _id: (item._id as ObjectId).toString(),
    }));
  } catch (error) {
    console.error("Error in getFeedbackData:", error);
    throw error;
  }
}

export default async function addFeedback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const feedbackData = req.body;
      const feedback = new FeedbackRequest(feedbackData);
      await feedback.save();
      res
        .status(201)
        .json({ message: "Feedback added successfully", feedback });
    } catch (error) {
      console.error("Error adding feedback:", error);
      res.status(500).json({ error: "Failed to add feedback", details: error });
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
