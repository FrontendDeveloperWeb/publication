import React from "react";
import StatsBar from "../../../components/StatsBar/StatsBar";
import HeroSection from "../../../components/JournalDashboard/HeroSection";
import EditorialBoardCard from "./partials/EditorialBoardCard";

const EditorialBoard = () => {
  return (
    <>
      <HeroSection />
      <section className="stat-sec">
        <StatsBar />
      </section>
      <section>
        <EditorialBoardCard />
      </section>
    </>
  );
};

export default EditorialBoard;
