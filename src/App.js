import React, { useState } from "react";
import "./styles.css";

/*
1. Replace the color variable with a "state variable" that is named className.
2. Update state inside the function handleClick so the className of the diamond
toggles between 'rotate-right' and 'rotate-left'. On first click, the diamond
should rotate to the right.

*/
function App() {
  let className = "diamond";

  function handleClick() {}

  // DO NOT MODIFY CODE BELOW THIS LINE
  return (
    <div className="app">
      <div className={className} data-testid="diamond"></div>
      <button onClick={handleClick}>diamond spinner</button>
    </div>
  );
}

export default App;
