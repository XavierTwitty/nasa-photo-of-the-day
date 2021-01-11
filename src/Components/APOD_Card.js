import React from "react";
import { Title, Wrapper, Photo } from "../styledComponent";

const PictureCard = (props) => {
  return (
    <Wrapper>
      <li className="picture-card">
        <Title>{props.title}</Title>
        <p> {props.copyright} </p>
        <p>{props.date}</p>
        <Photo src={props.hdurl}></Photo>
        <p> {props.explanation} </p>
      </li>
    </Wrapper>
  );
};
export default PictureCard;
