import React from "react";

const EditorialBoardStaffCard = ({ staffDetails }) => {
  const { img, designation, name } = staffDetails;

  return (
    <div>
      <img src={img} alt="" />
      <div>
        <p>{designation}</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default EditorialBoardStaffCard;
