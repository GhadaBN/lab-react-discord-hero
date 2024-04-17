import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import heroImage from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img className="logo" src={logo} />
        <img className="menu" src={menu} />
      </div>
      <div className="intro">
        <h1 className="title">IMAGINE A PLACE...</h1>
        <p className="text">
          ..where you can belong to a school club, a gaming gruoup, or a
          worlwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className="first-button">Download for Mac</button>
        <button className="second-button">Open Discord in your browser</button>
      </div>

      <img className="hero-image" src={heroImage} />
    </div>
  );
}

export default App;
