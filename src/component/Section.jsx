import './Section.scss';
import { FiSearch } from 'react-icons/fi';

const Section = () => (
  <section>
    <div className="carousel">
      <img src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="banner" />
      <form className="container-fluid mt-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search game" aria-label="Username" aria-describedby="basic-addon1" />
          <span className="input-group-text" id="basic-addon1">
            <FiSearch />
          </span>
        </div>
      </form>
    </div>
    <div className="main-section container">
      <hr className="mt-4" />
      <div className="row">
        <div className="col col-6">
          <div className="inner-container">
            <img src="https://www.freetogame.com/g/521/thumbnail.jpg" alt="" />
            <p className="mt-1">Diablo</p>
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            <img src="https://www.freetogame.com/g/517/thumbnail.jpg" alt="" />
            <p className="mt-1">Lostark</p>
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            <img src="https://www.freetogame.com/g/516/thumbnail.jpg" alt="" />
            <p className="mt-1">Lostark</p>
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            <img src="https://www.freetogame.com/g/508/thumbnail.jpg" alt="" />
            <p className="mt-1">Lostark</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
