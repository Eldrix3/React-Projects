import React, { useState, useEffect } from "react";
import { weapons } from "./WeaponsList";
import DisplayWeapon from "./components/DisplayWeapon";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(weapons);
  }, []);

  return (
    <div className="container">
      <DisplayWeapon items={items} />
    </div>
  );
};

export default App;
