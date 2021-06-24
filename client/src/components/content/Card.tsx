import React from "react";
import "../../styles/scss/Card.scss";
import { NoteType } from "./index";

export const Card = ({ title, date, description }: NoteType) => {
  return (
    <div className="card">
      <div className="card-title">
        <div className="card-name">{title}</div>
        <div className="card-time">{date}</div>
      </div>
      <div className="card-content">
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};
