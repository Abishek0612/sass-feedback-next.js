import React from "react";
import "../../app/styles/feedback.scss";

const FeedbackCard = () => {
  return (
    <div className="feedback-card">
      <div className="feedback-card-container">
        <div className="card card-one text-center">
          <h3>Eqaim</h3>
          <p>Feedback Board</p>
        </div>

        <div className="card card-two">
          <div className="categories">
            <div className="badge">All</div>
            <button className="category">UI</button>
            <button className="category">UX</button>
            <button className="category">Enhancement</button>
            <button className="category">Bug</button>
            <button className="category">Feature</button>
          </div>
        </div>

        <div className="card card-three text-center">
          <h3>Roadmap</h3>
          <ul>
            <li>Planned - 2</li>
            <li>In-Progress - 3</li>
            <li>Live - 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;


