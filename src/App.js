import React from "react";

function Food({fav}) {
  return <h2>I Like {fav}!</h2>
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food fav="kimchi" />
    <Food fav="samgyetang" />
    <Food fav="ramen" />
    <Food fav="kimpap" />
    <Food fav="popcorn" />
  </div>
  );
}

export default App;
