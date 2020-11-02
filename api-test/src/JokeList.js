import React from "react";

const JokeList = ({ jokes }) => {
  function nextJoke() {
    console.log(jokes.id);
    return jokes.id++;
  }
  return (
    <React.Fragment>
      <div>{nextJoke()}</div>
      <div>{jokes.joke}</div>
      <div>{jokes.setup}</div>
      <div>{jokes.delivery}</div>
      <button onClick={nextJoke}>next Joke</button>
    </React.Fragment>
  );
};

export default JokeList;
