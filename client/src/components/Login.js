import React from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import useForm from '../utils/useForm.js';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userInfo, handleChanges, clearForms] = useForm();

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', userInfo)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(err => console.log(err));
      clearForms();
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='username'
          value={userInfo.username || ''}
          onChange={handleChanges}
        />
        <input
          type='password'
          name='password'
          value={userInfo.password || ''}
          onChange={handleChanges}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
