
import './App.css'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';


import RPS from '../RPS/RPS'
import Home from '../Home/Home'
import Register from '../Register/Register'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import About from '../About/About'
import NewPost from '../NewPost/NewPost'


function App() {

  
  return (
    <Router >
      <div className="App">
        <header className="App-header">

          <div>
            <Link to="/home">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
          </div>

          <Switch >
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
              path="/about">
              <About />
            </Route>

            <Route
              exact
              path="/register">
              <Register />
            </Route>

            <ProtectedRoute
              exact
              path="/newpost">
                <NewPost/>
            </ProtectedRoute>


          </Switch>

        </header>
      </div>

    </Router>
  );
}

export default App;
