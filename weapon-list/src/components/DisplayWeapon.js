import React from "react";

const DisplayWeapon = ({ items }) => {
  console.log(items);
  return (
    <section className="cards">
      {items.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </section>
  );
};

export default DisplayWeapon;
