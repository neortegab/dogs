import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <Navbar  />
      </div>
      
      <div className='sidebar'>
        <Sidebar  />
      </div>
      
    </div>
  );
}

export default App;
