import React from "react";
import "./trivia.scss";

export default function CardImage(props) {
  return (
    <div>
      <img className="card-img" src={props.src} alt={props.alt} />
    </div>
  );
}
