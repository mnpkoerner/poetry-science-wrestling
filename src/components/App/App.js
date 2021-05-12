
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
import Crossword from '../Crossword/Crossword'
import Contact from '../Contact/Contact'
import Audio from '../Audio/Audio'
import KFAI from '../KFAI/KFAI'
import NASA from '../NASA/NASA'

const style = {
  margin: "1.2rem",
  textDecoration: "none",
  color: 'black'
};



function App() {


  return (
    <Router >
      <div>
        <header>

          <div className="nav-bar">
            <Link
              style={style}
              to="/home">
              Home
            </Link>
            <Link
              style={style}
              to="/about">
              About
            </Link>
            <Link
              style={style}
              to="/crossword">
              Crossword
            </Link>
            <Link
              style={style}
              to="/contact">
              Contact
            </Link>
            <Link
              style={style}
              to="/audio">
              Audio
            </Link>
            <Link
              style={style}
              to="/kfai">
              KFAI
            </Link>
            <Link
              style={style}
              to="/nasa">
              NASA
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
              path="/crossword">
              <Crossword />
            </Route>

            <Route
              exact
              path="/contact">
              <Contact />
            </Route>

            <Route
              exact
              path="/audio">
              <Audio />
            </Route>

            <Route
              exact
              path="/kfai">
              <KFAI />
            </Route>

            <Route
              exact
              path="/nasa">
              <NASA />
            </Route>

            <Route
              exact
              path="/register">
              <Register />
            </Route>


            <ProtectedRoute
              exact
              path="/newpost">
              <NewPost />
            </ProtectedRoute>


          </Switch>

        </header>
      </div>

    </Router>
  );
}

export default App;
