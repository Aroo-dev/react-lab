import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


    let message = <h1> Podaj adres</h1>;

    const [email, setEmail] = useState('artur@agh.edu.pl');


    function handleChange(event) {

        setEmail(event.target.value);
    }

    if (message.length > 0) {
        message = <h2>masz krótki adres </h2>
    }

    if (email.length > 10) {

        message = <div>troche dłuższy adres!</div>;

    } else if (email.length > 15) {

        message = <div>Twój adres e-mail jest w sam raz.</div>;

    } else {

        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;


    }


    return (

        <div>

            <h1>System do zapisów na zajęcia</h1>

            <h2>Twój e-mail to {email}.</h2>
            {message}

            <input type="text" onChange={handleChange}/>
            <button type="button" onClick={() => alert(email)}>

                pokaz adres email w alercie.

            </button>

        </div>

    );


}

export default App;
