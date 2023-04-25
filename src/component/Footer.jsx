import './Footer.scss';
import logo from '../assets/logo-White.png';

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <div className="container">
        <hr />
        <img className="mt-3" src={logo} alt="Samson Mbaziira" />
        <div className="row mt-4">
          <div className="col col-6">
            Microverse React-redux capstone project
          </div>
          <div className="col col-6">
            copyright &copy; &nbsp;
            {date.getFullYear()}
            <br />
            Allright reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
