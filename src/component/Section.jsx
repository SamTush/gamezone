import './Section.scss';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Section = () => {
  const item = {
    id: 521,
    title: 'Diablo Immortal',
    thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
    short_description: 'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
    game_url: 'https://www.freetogame.com/open/diablo-immortal',
    genre: 'MMOARPG',
    platform: 'PC (Windows)',
    publisher: 'Blizzard Entertainment',
    developer: 'Blizzard Entertainment',
    release_date: '2022-06-02',
    freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
  };

  return (
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
          <div className="col col-6" key={item.id}>
            <Link to={`game/${item.id}`}>
              <div className="inner-container">
                <img src="https://www.freetogame.com/g/521/thumbnail.jpg" alt="" />
                <p className="ps-2 mt-1">{item.title}</p>
              </div>
            </Link>
          </div>
          <div className="col col-6" key={item.id}>
            <Link to={`game/${item.id}`}>
              <div className="inner-container">
                <img src="https://www.freetogame.com/g/517/thumbnail.jpg" alt="" />
                <p className="ps-2 mt-1">Lostark</p>
              </div>
            </Link>
          </div>
          <div className="col col-6" key={item.id}>
            <Link to={`game/${item.id}`}>
              <div className="inner-container">
                <img src="https://www.freetogame.com/g/516/thumbnail.jpg" alt="" />
                <p className="ps-2 mt-1">Lostark</p>
              </div>
            </Link>
          </div>
          <div className="col col-6" key={item.id}>
            <Link to={`game/${item.id}`}>
              <div className="inner-container">
                <img src="https://www.freetogame.com/g/508/thumbnail.jpg" alt="" />
                <p className="ps-2 mt-1">Lostark</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
