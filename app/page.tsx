import FeedbackCard from "@/components/cards/FeedbackCard";
import Navbar from "@/components/navbar/Navbar";
import "./styles/home.scss";
import UserFeedbackCard from "@/components/cards/UserFeedbackCard";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <FeedbackCard />
      </div>
      <UserFeedbackCard />
    </>
  );
}
