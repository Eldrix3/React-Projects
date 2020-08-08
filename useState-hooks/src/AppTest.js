import React, { useState } from "react";
import { personell } from "./Personell";
import Person from "./components/Person";

function App() {
  console.log(personell);
  const [person, setPerson] = useState(personell);

  const Person = ({ persons }) => <h1 className="persons">{persons.name}</h1>;

  return (
    <div className="app">
      <div className="personell-list">
        {person.map((persons, index) => (
          <Person key={index} index={index} persons={persons} />
        ))}
      </div>
    </div>
  );
}

export default App;
