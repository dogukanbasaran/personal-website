import "./About.css";
import WhoIAm from "../../components/WhoIAm/WhoIAm";
import EduAndExp from "../../components/EduAndExp/EduAndExp";

const About = () => {
  return (
    <section className="about">
      <WhoIAm />
      <EduAndExp
        title={"My Education Past"}
        name_1={"Marmara University"}
        name_2={"Jagiellonian University"}
      />
      <EduAndExp
        title={"My Experiences"}
        name_1={"MUSEM"}
        name_2={"Field Researcher"}
      />
    </section>
  );
};

export default About;
