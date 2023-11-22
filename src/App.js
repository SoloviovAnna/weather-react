import "./App.css";
import SearchEngine from "./SearchEngine";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine className="App-Engine" defaultCity="Etobicoke" />
        <footer>
          <a
            className="icon-link icon-link-hover"
            href="https://github.com/SoloviovAnna/weather-react"
          >
            Open source code <span className="text">by Anna S</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
