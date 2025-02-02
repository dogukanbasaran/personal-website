import MileStone from "../MileStone/MileStone";
import "./EduAndExp.css";

const EduAndExp = ({ title, name_1, name_2, description_1, description_2 }) => {
  return (
    <div className="education-and-experiences">
      <h3>{title}</h3>
      <div className="milestones">
        <MileStone name={name_1} />
        <MileStone name={name_2} />
      </div>
    </div>
  );
};

export default EduAndExp;
