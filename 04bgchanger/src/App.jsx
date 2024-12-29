


import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#000"); // Black as default color

  return (
    <div
      className="w-full h-screen duration-200" // TailwindCSS classes
      style={{ backgroundColor: color }}       // Inline style for background
    >
    </div>
  );
}





export default App
