import logo from "./logo.svg";
import "./App.css";
import { Comment } from "./components/comments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment Author="Сараа" />
        <Comment Author="Дорж" />
      </header>
    </div>
  );
}

export default App;
