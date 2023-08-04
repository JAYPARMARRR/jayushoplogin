import { useState } from 'react';
import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const UsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const Submit = (event) => {
        event.preventDefault();

        // console.log('>>>>>>>>>>>>>>>>>>>>', { username, password });

        // eslint-disable-next-line react/prop-types
        props.logIn(username, password)


        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <form onSubmit={Submit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:😁</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={UsernameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:🙈</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={PasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
