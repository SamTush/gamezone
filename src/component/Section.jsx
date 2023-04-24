import './Section.scss';
import banner from '../assets/banner.png';

const Section = () => (
  <section>
    <div className="carousel">
      <img src={banner} alt="banner" />
      <form className="container-fluid mt-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          <span className="input-group-text" id="basic-addon1">@</span>
        </div>
      </form>
    </div>
    <div className="main-section container">
      <hr className="mt-4" />
      <div className="row">
        <div className="col col-6">
          <div className="inner-container">
            fasdfasd
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            fasdfasd
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            fasdfasd
          </div>
        </div>
        <div className="col col-6">
          <div className="inner-container">
            fasdfasd
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
