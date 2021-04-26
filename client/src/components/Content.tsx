import React from "react";
import "../scss/layout/content.scss";
import { Card } from "./content/Card";

export type NoteType = {
  nameNote: string;
  date: string;
  description: string;
};

const contentData = [
  { nameNote: "Note 1", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 2", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 3", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 4", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 5", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 6", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 4", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 5", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 6", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 6", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 4", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 5", date: "02/24/2021 6:28 AM", description: "" },
  { nameNote: "Note 6", date: "02/24/2021 6:28 AM", description: "" },
];

export const Content = () => {
  return (
    <div className="wrapper-content">
      <div className="card-container">
        {contentData.map((note, index) => {
          return (
            <>
              <div key={index} className="card-item">
                <Card
                  key={index}
                  nameNote={note.nameNote}
                  date={note.date}
                  description={note.description}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
