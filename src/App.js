import "./App.css";
import "./Weather";
import SearchEngine from "./SearchEngine";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine className="App-Engine" />
        <small class="footer-text">
          <a href="https://github.com/SoloviovAnna/weather-react">
            Open source code <span class="anna-text">by Anna S</span>
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
