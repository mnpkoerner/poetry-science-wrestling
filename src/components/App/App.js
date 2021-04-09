
import './App.css'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import RPS from '../RPS/RPS'
import Home from '../Home/Home'
//test
function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">

        <p>
          Test text.
        </p>
        <Route
          exact
          path="/">
          <RPS />
        </Route>
        <Route
          exact
          path="/home">
          <Home />
        </Route>

      </header>
    </div>
    </Router>
  );
}

export default App;
