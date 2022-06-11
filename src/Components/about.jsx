import "./about.css";
import { useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const showEmail = () => {
    setVisible(true);
  };
  const getContent = () => {
    if (visible) {
      return <h6>hainn619@gmail.om</h6>;
    } else {
      return (
        <div>
          <p>Click the button below</p>
          <button onClick={showEmail} className="btn btn-primary">
            Show Info
          </button>
        </div>
      );
    }
  };

  return (
    <div className="about-page">
      <h1>Hai Nguyen</h1>
      {getContent()}
    </div>
  );
};
export default About;
