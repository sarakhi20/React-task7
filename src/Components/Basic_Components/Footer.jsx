
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-dark">
        <div className="container">
        <p className="m-0 text-center text-white">           
            <Link to={"https://65eed58eead08fa78a4f025d.mockapi.io/Books"}>
             Pretty print
            </Link>{" "}
            
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;