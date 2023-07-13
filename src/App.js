import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './pages/Main';
import Sedes from './pages/Sedes'
import Form from './components/Form';
import MiCuenta from './pages/MiCuenta';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Sedes' element={<Sedes/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/MiCuenta' element={<MiCuenta/>}/>
    </Routes>
  );
}

export default App;
