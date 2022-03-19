import logo from './logo.svg';
import './App.css';
import Dashboard from "./Dashboard";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
         
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
