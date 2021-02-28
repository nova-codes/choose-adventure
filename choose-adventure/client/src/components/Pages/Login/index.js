import React, {useState, useContext} from 'react';
import AuthService from '../../../authentication/AuthService';
import Message from '../../Message';
import {AuthContext} from '../../../authentication/AuthContext';

const Login = props => {
    const [user, setUser] = useState({username: "", password: ""});
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e => {
        e.preventDefault();
        setUser({...user,[e.target.name] : e.target.value});
        console.log(user);
    }
    
    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/admin');
            }
            else
                setMessage(message);
        });
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please log in</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" name="username" onChange={onChange} className="form-control" placeholder="Enter username"/>
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Enter password"/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Login;