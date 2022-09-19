import './App.css';
import Funcvalidate from './components/Funcvalidate';
import NameFirst from './components/NameFirst';
import Validate from './components/Validate';

function App() {
  return (
    <div className="App">
      <NameFirst name={'kamal'}/>
      <Validate />
      <Funcvalidate />
    </div>
  );
}

export default App;
