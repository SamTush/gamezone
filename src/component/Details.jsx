import './Details.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaGamepad } from 'react-icons/fa';
import { AiFillChrome, AiFillWindows } from 'react-icons/ai';
import { fetchGames } from '../redux/games/gamesSlice';

const Details = () => {
  const { gameId } = useParams();
  const { currentGame } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames(gameId));
  }, [dispatch, gameId]);

  if (!currentGame) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const platformIcons = {
    'PC (Windows)': <AiFillWindows size={25} />,
    'Web Browser': <AiFillChrome size={25} />,
  };

  return (
    <>
      <section>
        <img src={currentGame.thumbnail} alt="banner" />
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
                {currentGame.title}
                <span>
                  <br />
                  {currentGame.genre}
                </span>
              </h2>
              <p>
                {currentGame.short_description}
              </p>
              <div className="row">
                <div className="col col-6">
                  <span>platform</span>
                  <br />
                  {platformIcons[currentGame.platform] || null}
                </div>
                <div className="col col-6">
                  <span>release_date:</span>
                  <br />
                  {currentGame.release_date}
                </div>
                <div className="col col-6">
                  <span>publisher</span>
                  <br />
                  {currentGame.publisher}
                </div>
                <div className="col col-6">
                  <span>developer</span>
                  <br />
                  {currentGame.developer}
                </div>
                <div className="col col-12 d-flex justify-content-center">
                  <a href={currentGame.game_url}>
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

export default Details;
