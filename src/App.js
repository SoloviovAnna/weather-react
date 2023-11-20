import "./App.css";
import SearchEngine from "./SearchEngine";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <SearchEngine className="App-Engine" />
      <small class="footer-text">
        <a href="https://github.com/SoloviovAnna/weather-react">
          Open source code <span class="anna-text">by Anna S</span>
        </a>
      </small>
    </div>
  );
}

export default App;
