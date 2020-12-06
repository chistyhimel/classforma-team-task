import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import DocumentView from "./components/DocumentView/DocumentView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/document/:id" component={DocumentView} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
