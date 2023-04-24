import './Header.scss';

const Header = () => (
  <header>
    <nav className="navbar d-flex justify-content-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          game
          <span>
            Zone
          </span>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
