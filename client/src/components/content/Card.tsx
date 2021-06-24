import React from "react";
import { INote } from "../../interfaces/interfaces";
import "../../styles/scss/Card.scss";

export const Card = ({ title, createdAt, description }: INote) => {
  return (
    <div className="card">
      <div className="card-title">
        <div className="card-name">{title}</div>
        <div className="card-time">{createdAt}</div>
      </div>
      <div className="card-content">
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};
