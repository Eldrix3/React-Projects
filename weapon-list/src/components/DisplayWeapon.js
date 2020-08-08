import React from "react";

const DisplayWeapon = (items) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};

export default DisplayWeapon;
