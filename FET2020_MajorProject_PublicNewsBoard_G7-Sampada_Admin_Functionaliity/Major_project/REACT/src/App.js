import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import {Grommet} from 'grommet';
import {NewsList} from './Components/NewsList';
import { Switch, Route, Link } from "react-router-dom";
import {UserRequests} from './Components/UserRequests';


function App() {
  return (
    <Grommet plain>






 <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          My APP
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/news"} className="nav-link">
              News List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Requests of users
            </Link>
          </li>
        </div>
      </nav> 
 
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/news"]} component={NewsList} />
          <Route exact path={["/", "/users"]} component={UserRequests} />
          {/* <Route exact path="/add" component={AddTutorial} /> */}
          {/* <Route path="/login" component={Login} />
          <Route path="/logout" component={LogOut} /> */}
        </Switch>
      </div>
    </Grommet>
  );
}

export default App;
