import React from 'react';
import { AuthContext } from './components/header';

// components
import Header from './components/header';
import NavBar from './components/navbar';
import Footer from './components/footer';

const LoginPage = () => {
    const dispatch = React.useContext(AuthContext);
    const initialState = {
      username: "",
      password: "",
      isSubmitting: false,
      errorMessage: null
    };
    const [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        };
    const handleLogin = event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch("http://localhost:8000/token-auth/", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
            },
        body: JSON.stringify({
          username: data.username,
          password: data.password
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(resJson => {
          dispatch({
              type: "LOGIN",
              payload: resJson
          })
        })
        .catch(error => {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: error.message || error.statusText
          });
        });
    };
    return(
        <div className="loginpage">
            <Header/>
            <NavBar/>
            <div className="login-container">
                <div className="login-card">
                    <div className="card-container">
                        <form onSubmit={handleLogin}>
                            <h1>Login</h1>

                            <label htmlFor="username">
                            Username 
                            <input
                                type="text"
                                value={data.username}
                                onChange={handleInputChange}
                                name="username"
                                id="username"
                            />
                            </label>

                            <label htmlFor="password">
                            Password 
                            <input
                                type="password"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password"
                                id="password"
                            />
                            </label>

                            {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                            )}

                        <button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "Loading..."
                            ) : (
                                "Login"
                            )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage;
