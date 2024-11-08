import { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonColor, setButtonColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonColor(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome to A <br /> Real World...
        </h1>
      </section>
    </section>
  );
};

export default ToggleBackgroundColor;





