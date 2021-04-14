
import './App.css'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import RPS from '../RPS/RPS'
import Home from '../Home/Home'
import Register from '../Register/Register'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Test from '../Test/Test'


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
          <Route
            exact
            path="/register">
            <Register />
          </Route>
          <ProtectedRoute
            exact
            path="/behold">
              <Test />
          </ProtectedRoute>


        </header>
      </div>
    </Router>
  );
}

export default App;
