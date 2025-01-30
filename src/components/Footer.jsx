import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="copyright-text">Dogukan Basaran &copy; 2025.</span>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/dogukanbasaran/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/dogukanbasaran">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
