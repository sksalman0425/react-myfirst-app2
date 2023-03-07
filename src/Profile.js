import React from "react";

export default function Profile() {
  const person = {
    name: "Gregorio Y. Zara",
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={person.imageUrl} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}