import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src="./pics/trollface2.jpg" className="header--image" />
      <h1 className="header--title">MeMe Generator</h1>
      <h2 className="header--project">React Project</h2>
    </header>
  );
}

//Example of without JSX
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
