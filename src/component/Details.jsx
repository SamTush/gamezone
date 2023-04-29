import './Details.scss';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaChevronLeft, FaGamepad } from 'react-icons/fa';
import { AiFillChrome, AiFillWindows } from 'react-icons/ai';

const Details = () => {
  const { isLoading } = useSelector((state) => state.games);
  const { gameId } = useParams(); // retrieve the gameId parameter from the URL
  const game = useSelector((state) => state.games.games.find((game) => game.id === Number(gameId)));

  if (isLoading) {
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
        <img src={game.thumbnail} alt="banner" />
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <Link to="/">
              <div className="col col-3 d-flex align-items-center link mt-3">
                <FaChevronLeft />
                <span className="ms-2">back</span>
              </div>
            </Link>
            <div className="col mt-3 mb-4 desc">
              <h2>
                {game.title}
                <span>
                  <br />
                  {game.genre}
                </span>
              </h2>
              <p>
                {game.short_description}
              </p>
              <div className="row">
                <div className="col col-6">
                  <span>platform</span>
                  <br />
                  {platformIcons[game.platform] || null}
                </div>
                <div className="col col-6">
                  <span>release_date:</span>
                  <br />
                  {game.release_date}
                </div>
                <div className="col col-6">
                  <span>publisher</span>
                  <br />
                  {game.publisher}
                </div>
                <div className="col col-6">
                  <span>developer</span>
                  <br />
                  {game.developer}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-11 play-float d-flex justify-content-end">
              <a className="play" href={game.game_url}>
                <FaGamepad className="icon" size={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
