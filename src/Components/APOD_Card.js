import React from "react";

const PictureCard = (props) => {
  return (
    <li className="picture-card">
      <h2>{props.title}</h2>
      <p> {props.copyright} </p>
      <p>{props.date}</p>
      <img src={props.hdurl}></img>
      <p> {props.explanation} </p>
    </li>
  );
};
export default PictureCard;
