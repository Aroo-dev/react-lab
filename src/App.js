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

        content = <div><LoginForm onLogin={(email) => setAuthenticatedUserName(email)}
                                  buttonLabel="zaloguj się"/>


            <LoginForm onLogin={(email) => setAuthenticatedUserName(email)}
                       buttonLabel="Zapis się na newsletter"/>;


            <LoginForm onLogin={(email) => setAuthenticatedUserName(email)}
                       buttonLabel="Zarejestruj się"/>;
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