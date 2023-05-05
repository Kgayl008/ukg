import "./App.scss";
import Close from "../src/assets/icons/close.png";
import { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleClick = () => {
    setButtonText("Review");
  };

  return (
    <>
      <div className="container">
        <img src={Close} alt=" close x icon" className="icon" />
        <p className="title">Tell us what’s happening?</p>
        <form action="">
          <textarea type="text" className="input"></textarea>
          <button onClick={handleClick} className="button">
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
