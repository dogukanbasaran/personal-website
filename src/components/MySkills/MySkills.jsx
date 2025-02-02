import icon_js from "../../assets/images/icons/js.svg";
import icon_html from "../../assets/images/icons/html.svg";
import icon_css from "../../assets/images/icons/css.svg";
import icon_react from "../../assets/images/icons/react.svg";
import icon_python from "../../assets/images/icons/python.svg";

import "./MySkills.css";

const MySkills = () => {
  return (
    <div className="skills">
      <h3>My Skills</h3>
      <div className="skill">
        <img src={icon_html} alt="skill icon" />
        <p>HTML5</p>
      </div>
      <div className="skill">
        <img src={icon_css} alt="skill icon" />
        <p>CSS3</p>
      </div>
      <div className="skill">
        <img src={icon_js} alt="skill icon" />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <img src={icon_react} alt="skill icon" />
        <p>React</p>
      </div>
      <div className="skill">
        <img src={icon_python} alt="skill icon" />
        <p>Python</p>
      </div>
    </div>
  );
};

export default MySkills;
