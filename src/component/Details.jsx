import './Details.scss';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaGamepad } from 'react-icons/fa';
import { AiFillChrome, AiFillWindows } from 'react-icons/ai';

const Detailer = () => {
  const item = {
    id: 251,
    title: 'The Lord of the Rings Online',
    thumbnail: 'https://www.freetogame.com/g/251/thumbnail.jpg',
    short_description: "A free to play MMORPG set in the world of J.R.R. Tolkien's classic fantasy saga.",
    game_url: 'https://www.freetogame.com/open/lotro',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Warner Bros. Interactive Entertainment',
    developer: 'Turbine, Inc.',
    release_date: '2001-04-24',
    freetogame_profile_url: 'https://www.freetogame.com/lotro',
  };

  const platformIcons = {
    'PC (Windows)': <AiFillWindows size={25} />,
    'Web Browser': <AiFillChrome size={25} />,
  };

  return (
    <>
      <section>
        <img src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="banner" />
        <div className="container">
          <div className="row">
            <Link to="/">
              <div className="col col-3 d-flex align-items-center link mt-3">
                <FaChevronLeft />
                <span className="ms-2">back</span>
              </div>
            </Link>
            <div className="col mt-3 desc">
              <h2>
                Enlisted
                <span>
                  <br />
                  Shooter
                </span>
              </h2>
              <p>
                Get ready to command your own World War II
                military squad in Gaijin and Darkflow Software’s
                MMO squad-based shooter Enlisted.
              </p>
              <div className="row">
                <div className="col col-6">
                  <span>platform</span>
                  <br />
                  {platformIcons[item.platform] || null}
                </div>
                <div className="col col-6">
                  <span>release_date:</span>
                  <br />
                  2021-04-08
                </div>
                <div className="col col-6">
                  <span>publisher</span>
                  <br />
                  Gaijin Entertainment
                </div>
                <div className="col col-6">
                  <span>developer</span>
                  <br />
                  Darkflow Software
                </div>
                <div className="col col-12 d-flex justify-content-center">
                  <a href="https://www.freetogame.com/open/enlisted">
                    <FaGamepad size={50} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailer;
