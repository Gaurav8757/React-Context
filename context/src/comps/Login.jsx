import  { useState, useContext } from "react";
import UserContext from "../context/userContext";
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // IMPORT CONTEXT FROM CONTEXT FILE 
    // setUser state fn is a props passed from UserContextProvider 
    const { setUser } = useContext( UserContext );



    const handleSubmit = (e) => {
        e.preventDefault();
// sending data from name & password state to setUser as destructure form 
// sended to setUser component
        setUser({ name, password })

    }
    return (
        <div>
            <h2>Login</h2>
<div style={{display: "flex", justifyContent:"space-between", margin:"3rem"}}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" /><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    )
}


export default Login;