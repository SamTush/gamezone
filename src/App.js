import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from './redux/games/gamesSlice';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import Details from './component/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="game/:gameId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
