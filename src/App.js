import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import Details from './component/Details';

function App() {
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
