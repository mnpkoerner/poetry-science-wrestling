
import './App.css'
import {
  HashRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';


import RPS from '../RPS/RPS'
import Home from '../Home/Home'
import Register from '../Register/Register'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Test from '../Test/Test'
import NewPost from '../NewPost/NewPost'


function App() {
  return (
    <Router >
      <div className="App">
        <header className="App-header">
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
              path="/register">
              <Register />
            </Route>
            <Route
              exact
              path="/newpost">
                <NewPost/>
            </Route>
            <ProtectedRoute
              exact
              path="/test">
              <Test />
            </ProtectedRoute>
          </Switch>

        </header>
      </div>

    </Router>
  );
}

export default App;
