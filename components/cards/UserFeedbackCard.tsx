"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFeedbackData } from "@/lib/actions/feedback.action";
import "../../app/styles/UserFeedback.scss";
import { Feedback } from "@/lib/types";

const UserFeedbackCard: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeedbackData();
      setFeedbackData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {feedbackData.map((feedback) => (
        <div key={feedback._id} className="user-card">
          <div className="user-upvotes">{feedback.upvotes}</div>
          <div className="user-content">
            <h1>{feedback.title}</h1>
            <p>{feedback.description}</p>
            <h5>{feedback.category}</h5>
          </div>
          <div className="user-comment">
            <Image
              src="/assets/shared/icon-comments.svg"
              alt="comment"
              height={20}
              width={20}
            />
            <h3>{feedback.comments.length}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFeedbackCard;
