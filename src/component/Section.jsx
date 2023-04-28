import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { fetchGames } from '../redux/games/gamesSlice';
import './Section.scss';

const Section = () => {
  const { games, isLoading } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const filteredGames = games.filter((game) => (
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <div className="carousel">
        <img src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="banner" />
        <form className="container-fluid mt-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search game"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon1">
              <FiSearch />
            </span>
          </div>
        </form>
      </div>
      <div className="main-section container">
        <hr className="mt-4" />
        <div className="row">
          {filteredGames.map((item) => (
            <div className="col col-6" key={item.id}>
              <Link to={`/game/${item.id}`}>
                <div className="inner-container">
                  <img src={item.thumbnail} alt="" />
                  <p className="ps-1 mt-1 mb-1">{item.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
