
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
            <Link to="/crossword">
              Crossword
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/audio">
              Audio
            </Link>
            <Link to="/kfai">
              KFAI
            </Link>
            <Link to="/nasa">
              NASA
            </Link>
            <Link to="/words">
              Words
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
                <NewPost/>
            </ProtectedRoute>


          </Switch>

        </header>
      </div>

    </Router>
  );
}

export default App;
