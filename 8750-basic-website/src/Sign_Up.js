import './App.css';
import { useNavigate } from "react-router";

function Sign_Up() {
    const history = useNavigate();

    const LoginPage = () => {
        history("/login")
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to CPSC 8750 first Assignment.</h1>
                <p>
                    Sign up to get Started!
                </p>

                <label>Username:{" "}
                    <input type="text" name="username" className='Input'></input>
                </label>

                <label>Email:{" "}
                    <input type="text" name="email" className='Input'></input>
                </label>

                <label>Password:{" "}
                    <input type="text" name="password" className='Input'></input>
                </label>
                <button className='Button' onClick={console.log("Home Page")}>Submit</button>

                <button className='Button' onClick={LoginPage}>Log In</button>
            </header>
        </div>
    );
}

export default Sign_Up;
