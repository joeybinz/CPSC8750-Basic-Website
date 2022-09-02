import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from './Sign_Up';
import LogIn from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
      </nav>
    </BrowserRouter>
  );
}

export default App;
