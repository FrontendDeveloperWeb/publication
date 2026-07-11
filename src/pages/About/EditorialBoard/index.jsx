import React from "react";
import StatsBar from "../../../components/StatsBar/StatsBar";
import HeroSection from "../../../components/JournalDashboard/HeroSection";
import EditorialBoardCard from "./partials/EditorialBoardCard";
import EditorialBoardContent from "./partials/EditorialBoardContent";
import EditorialBoardStaffCards from "./partials/EditorialBoardStaffCards";
import "../../../../src/assets/styles/talha.css";
import AssociateEditorsList from "./partials/AssociateEditorsList";

const EditorialBoard = () => {
  return (
    <>
      <HeroSection />
      <section className="stat-sec">
        <StatsBar />
      </section>

      {/* 2-Column Layout Container */}
      <section className="editorial-main-section">
        {/* Left Sidebar */}
        <div className="editorial-sidebar">
          <EditorialBoardCard />
          <EditorialBoardContent />
        </div>

        {/* Right Main Content */}
        <div className="editorial-main-content">
          <EditorialBoardStaffCards />
          <AssociateEditorsList />
        </div>
      </section>
    </>
  );
};

export default EditorialBoard;
