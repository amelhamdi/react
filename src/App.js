import './App.css';
import Formulaire from './compenement/Formulaire';
import Navbarr from './compenement/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='app'>
     <Navbarr/>
     <Formulaire />
    </div>
  );
}

export default App;
