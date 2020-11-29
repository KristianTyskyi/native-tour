import MapComponent from 'components/map/MapComponent';
import AboutComponent from 'components/about/AboutComponent';
import 'App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
            <Route exact path="/">
                <MapComponent />
            </Route>
            <Route path="/about">
                <AboutComponent />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
