import {Header} from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Footer  from './components/Footer';
import  Welcome  from './components/Welcome';
import  Contact  from './components/Contact';
import  About  from './components/About';
import Abt from './components/Abt';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route path={'/'} element={<Welcome/>} />
      <Route path={'/abt'} element={<Abt/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
