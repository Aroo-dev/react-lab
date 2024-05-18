import './App.css';
import {useState} from "react";
import "milligram"

function App() {
    const [email, setEmail] = useState('magda@agh.edu.pl');
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout() {
        setIsAuthenticated(false);
        setEmail(" ");
    }

    let content;
    if (isAuthenticated) {
        content = <div>
            <h2>Twoj e-mail to {email}</h2>
            <button onClick={() => setIsAuthenticated(false)}>Wyloguj się</button>
        </div>
    } else {
        content = <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={() => setIsAuthenticated(true)}>Zaloguj się</button>
        </div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}
export default App;