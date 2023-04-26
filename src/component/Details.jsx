import './Details.scss';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaChevronLeft, FaGamepad } from 'react-icons/fa';
import { AiFillChrome, AiFillWindows } from 'react-icons/ai';

const Details = () => {
  const { games, isLoading } = useSelector((state) => state.games);
  const { id } = useParams();
  const gameDetail = games.find((item) => item.id === parseInt(id, 10)) ?? {};

  //   gameDetail = {
  //     id: 17,
  //     title: 'Entropia Universe',
  //     thumbnail: 'https://www.freetogame.com/g/17/thumbnail.jpg',
  //     short_description: 'A 3D
  // MMO Multi Virtual World Real Cash Economy Experience with RPG elements. ',
  //     game_url: 'https://www.freetogame.com/open/entropia-universe',
  //     genre: 'MMORPG',
  //     platform: 'Web Browser',
  //     publisher: 'MindArk',
  //     developer: 'MindArk',
  //     release_date: '2003-01-30',
  //     freetogame_profile_url: 'https://www.freetogame.com/entropia-universe',
  //   };

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
        <img src={gameDetail.thumbnail} alt="banner" />
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
                {gameDetail.title}
                <span>
                  <br />
                  {gameDetail.genre}
                </span>
              </h2>
              <p>
                {gameDetail.short_description}
              </p>
              <div className="row">
                <div className="col col-6">
                  <span>platform</span>
                  <br />
                  {platformIcons[gameDetail.platform] || null}
                </div>
                <div className="col col-6">
                  <span>release_date:</span>
                  <br />
                  {gameDetail.release_date}
                </div>
                <div className="col col-6">
                  <span>publisher</span>
                  <br />
                  {gameDetail.publisher}
                </div>
                <div className="col col-6">
                  <span>developer</span>
                  <br />
                  {gameDetail.developer}
                </div>
                <div className="col col-12 d-flex justify-content-center">
                  <a href={gameDetail.game_url}>
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
