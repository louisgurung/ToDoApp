import React from "react";

const toDosPrettier = {
  margin: "15px",
  color: "green"
};
const ListofToDos = props => (
  <div>
    {props.items.map((item, index) => (
      <li
        style={toDosPrettier}
        onClick={e => {
          props.removeItem(index);
        }}
        key={item}
      >
        {item}
      </li>
    ))}
  </div>
);

export default ListofToDos;
