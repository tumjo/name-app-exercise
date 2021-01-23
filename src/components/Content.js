import React from "react";
import Name from "./Name";

const Content = (props) => {
  return (
    <ul>
      {props.names.map((unit, index) => (
        <Name key={index} name={unit.name} amount={unit.amount} />
      ))}
    </ul>
  );
};

export default Content;
