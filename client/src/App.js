import './App.css';
import { Switch,  Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
