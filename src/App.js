import { Header } from "./Components/Headers/Header";
import { Launches } from "./Components/Launches/Launches";
import {
  BrowserRouter as Router,
  Switch,
  Route,

 
} from "react-router-dom";
import './styles.css';
import { LaunchView } from "./Components/LaunchView/LaunchView";
function App() {
  return (
    <Router>
        <div>
          <Header/>
          <Switch>
             
              <Route path='/LaunchView/:flight_number'>
                  <LaunchView />
              </Route>
              <Route path="/">
                  <Launches/>
              </Route>

          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
