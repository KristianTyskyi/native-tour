import MapPageComponent from 'pages/map/MapPageComponent';
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
                  <MapPageComponent />
              </Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
