import { useState} from "react";
import "react-router-dom"
import axios from "axios";

const RegisterPage = ({ history }) => {

  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const user = {
      username,
      email,
      password
    }

    try {
      const { data } = await axios.post(
        "/register",
        user,
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="form">
        <div className="form-group">
          <label for="username">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Enter username"/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter password"/>
        </div>
      </div>
      <button onClick={submitHandler} className="btn btn-primary">Register</button>
    </div>
  );
}

export default RegisterPage;
