import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Button from "./components/Button";

const App = (props) => {
  const [names, setNames] = useState(props.names);
  const [search, setSearch] = useState("");

  const orderByAmount = () => {
    const cnames = [...names];
    cnames.sort((a, b) => {
      if (a.amount < b.amount) return 1;
      if (a.amount > b.amount) return -1;
      return 0;
    });
    setNames(cnames);
  };

  const orderByName = () => {
    const cnames = [...names];
    cnames.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setNames(cnames);
  };

  const total = () => names.reduce((tot, name) => tot + name.amount, 0);

  const handleInputChange = (event) => {
    const searchName = names.find((n) => n.name === event.target.value);
    if (searchName) setSearch(searchName.name + " " + searchName.amount);
    else setSearch("");
  };

  return (
    <div className="App">
      <h2>Name Application</h2>
      <p>The total amount of all the names: {total()}</p>

      <form>
        <label htmlFor="name">Search by name: </label>
        <input type="text" id="name" onChange={handleInputChange} />
      </form>
      <p>{search}</p>

      <Button handleClick={orderByAmount} text="order by amount" />
      <Button handleClick={orderByName} text="order by name" />
      <Content names={names} />
    </div>
  );
};

export default App;
