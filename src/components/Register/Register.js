import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import Login from '../Login/Login'
import NewPost from '../NewPost/NewPost'


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  // const registerUser = (event) => {
  //   event.preventDefault();
  //   console.log(username, password)

  //   dispatch({
  //     type: 'REGISTER',
  //     payload: {
  //       username: username,
  //       password: password,
  //     },
  //   });
  // }; // end registerUser

  return (
    <>
    {/* <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form> */}
    <div className="text-container">
        {user.id ? <NewPost />: <Login/>}
    </div>
    </>
  );
}

export default RegisterForm;
