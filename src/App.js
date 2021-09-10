import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <Router>
        <TopBar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route path='/register'> {user ? <Homepage /> : <Register /> } </Route>
          <Route path='/login'> {user ? <Homepage /> : <Login /> } </Route>
          <Route path='/settings'> {user ? <Settings /> : <Register /> } </Route>
          <Route path='/write'> {user ? <Write /> : <Register /> } </Route> 

          <Route path='/post/:postId'>
            <Single />
          </Route>
        </Switch>       
    </Router>
  );
}

export default App;
