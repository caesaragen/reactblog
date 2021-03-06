import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Portfolio from "./pages/home/portfolio/Portfolio";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          {/* <Portfolio/> */}
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">
          <Route path="/write">{user ? <Settings /> : <Register />}</Route>
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
