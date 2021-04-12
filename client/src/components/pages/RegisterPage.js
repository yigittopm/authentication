import { useState, useEffect} from "react";
import axios from "axios";

function RegisterPage() {

  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password
    }

    axios.post("http://localhost:5000/register", user)
      .then(result => console.log(result))
      .catch(err => console.log(err));
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
