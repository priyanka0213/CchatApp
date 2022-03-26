import logo from "./logo.svg";
import socketIO from "socket.io-client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//const ENDPOINT = "http://localhost:4500/";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
//const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
function App() {
  // socket.on("connect", () => {});
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    </div>
  );
}

export default App;
