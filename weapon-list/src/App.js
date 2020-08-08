import React, { useState, useEffect } from "react";
import { weapons } from "./WeaponsList";
//import DisplayWeapon from "./components/DisplayWeapon";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(weapons);
  });

  return (
    <div className="container">
      <div>
        {items.map((item) => (
          <h1>
            {item.name} {item.id}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default App;
