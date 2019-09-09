import React from "react";

const ListofToDos = props => (
  <div>
    {props.items.map((item, index) => (
      <li
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
