import './App.css';
import { Switch,  Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Navbar  from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/temperaments'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
