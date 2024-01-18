"use client";

import "../../styles/add-feedback.scss";
const AddFeedbackPage = () => {
  return (
    <div className="add-feedback-page">
      <form className="feedback-form">
        <div className="form-group">
          <label htmlFor="title">Feedback Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter your feedback title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default AddFeedbackPage;
