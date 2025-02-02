import me from "../../assets/images/ben.jpg";
import "./WhoIAm.css";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const WhoIAm = () => {
  return (
    <div className="who-i-am">
      <h3>Who I Am?</h3>
      <div className="container">
        <img src={me} alt="photo" height={200} />
        <div className="links">
          <a href="mailto:dogukanbasarann@hotmail.com">
            <EmailIcon sx={{ fontSize: "2em" }} />
          </a>

          <a href="/my_resume.pdf" download>
            <span>Resume</span> <FileDownloadIcon sx={{ fontSize: "2em" }} />
          </a>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem totam
          dolor ad impedit voluptate porro ratione optio incidunt laudantium
          doloremque magnam ipsa sit rerum, voluptatum veniam quibusdam quos
          sint, nesciunt sunt dolores, vel et accusantium mollitia! Cupiditate
          odit, aut necessitatibus, commodi repudiandae porro placeat eius,
          culpa enim soluta voluptas suscipit. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quidem totam dolor ad impedit voluptate
          porro ratione optio incidunt laudantium doloremque magnam ipsa sit
          rerum, voluptatum veniam quibusdam quos sint, nesciunt sunt dolores,
          vel et accusantium mollitia! Cupiditate odit, aut necessitatibus,
          commodi repudiandae porro placeat eius, culpa enim soluta voluptas
          suscipit.
        </p>
      </div>
    </div>
  );
};

export default WhoIAm;
