import './App.css';
import { Main } from './components/main/Main';
import Sidenav from './components/sideNav/sidNav';

function App() {

    return (
    <div className="App">
      <Sidenav />
      <div className='container'>
      <Main />
      </div>
      
      
    </div>
  );
}

export default App;
