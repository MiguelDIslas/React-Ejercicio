import { useNavigate } from "react-router-dom";
import "./Footer.style.scss";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="text-center p-3">
        <div
          className="text-decoration-none footer-link"
          onClick={() => navigate("/")}
        >
          Admin Panel {"\u00a9"}2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
