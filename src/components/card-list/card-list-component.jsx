import React from "react";
//import "./card-list.css";
import { Card } from "../card/card-component";
export const CardList = (props) => {
  return (
    <div className=" grid grid-rows-4 grid-flow-col gap-y-7 gap-x-1 pt-7 ">
      {props.mosters.map((user) => (
        <Card key={user.id} monsters={user}></Card>
      ))}
    </div>
  );
};
