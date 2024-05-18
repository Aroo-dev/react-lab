import './App.css';
import {useState} from "react";
import "milligram"
import LoginForm from "./LoginForm";

function App() {

    const [authenticatedUserName, setAuthenticatedUserName] = useState('');



    function logout() {
    }


    let content;
    if (authenticatedUserName) {
        content = <div>
            <h2>Twoj e-mail to {authenticatedUserName}</h2>
            <button onClick={logout}></button>
        </div>
    } else {
       content = <LoginForm onLogin={(email) => setAuthenticatedUserName(email) }/>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}
export default App;