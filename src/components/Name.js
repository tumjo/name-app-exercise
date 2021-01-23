import React from "react";

const Name = ({ name, amount }) => {
  return (
    <li>
      {name} {amount}
    </li>
  );
};

export default Name;
