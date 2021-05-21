import React from "react";
import "../../styles/scss/layout/content.scss";
//import { Card } from "./Card";

export type NoteType = {
  nameNote: string;
  date: string;
  description: string;
};

export const Content = () => {
  return (
    <div className="wrapper-content">
      <div className="card-container">
        {/* {contentData.map((note, index) => {
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
        })} */}
      </div>
    </div>
  );
};
