import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/home/Home';
import Explore from './components/pages/explore/Explore';
import Profile from './components/pages/profile/Profile';
import Inbox from './components/pages/inbox/Inbox';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/direct/inbox">
            <Inbox />
          </Route>
          <Route path="/:username">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
