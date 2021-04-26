import React from "react";
import "../../scss/Card.scss";
import { NoteType } from "../Content";

export const Card = ({ nameNote, date, description }: NoteType) => {
  return (
    <div className="card">
      <div className="card-title">
        <div className="card-name">{nameNote}</div>
        <div className="card-time">{date}</div>
      </div>
      <div className="card-content">
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};
