import MapComponent from 'components/map/MapComponent';
import AboutComponent from 'components/about/AboutComponent';
import 'App.css';

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <HashRouter basename='/'>
            <Switch>
              <Route exact path="/">
                  <MapComponent />
              </Route>
              <Route path="/about">
                  <AboutComponent />
              </Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
