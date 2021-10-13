import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import react and use state
// create usestate which is a bollean to be used in home and profile page.




function App() {
  return  (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path ="/login">
          <Login/>
        </Route>
        <Route path ="/register">
          <Register/>
        </Route>
        <Route path ="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
