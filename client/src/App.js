import './App.css';
import { Switch,  Route, useLocation } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import CardDetail from './Components/CardDetail';
import Navbar  from './Components/Navbar';

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      { (pathname !== '/') && <Navbar />}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/dog/:id'>
          <CardDetail />
        </Route>
        <Route path='/temperaments'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
