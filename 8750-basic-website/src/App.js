import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from './Sign_Up'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </nav>
    </BrowserRouter>
  );
}

export default App;
