import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/NavBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import Store from './pages/Store';
import Cancel from './pages/Cancel';

function App() {
  return (
    <div className="App">
      <Container>
        <NavBarComponent />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Store />}/>
            <Route path='success' element={<Success />}/>
            <Route path='cancel' element={<Cancel />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
