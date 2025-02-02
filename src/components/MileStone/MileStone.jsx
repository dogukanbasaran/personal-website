import "./MileStone.css";

const MileStone = ({ name }) => {
  return (
    <div className="milestone">
      <span>{name}</span>
      <div className="time-line">
        <div className="point"></div>
        <div className="line"></div>
      </div>
      <p>
        description Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quas, tempora.
      </p>
    </div>
  );
};

export default MileStone;
