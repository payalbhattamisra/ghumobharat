import React from "react";
import "./PeopleReview.css";
const PeopleReview = (props) => {
  return (
    <div className="reviewSys">
      <span className="headR"><big>{props.name}</big></span>
      <span className="reviewU">{props.reviewU}</span>
      <img src={props.srcI}alt="img" className="userimg" />
    </div>
  );
};

export default PeopleReview;
