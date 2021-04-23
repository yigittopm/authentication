//import { useDispatch, useSelector} from "react-redux";
import { useState} from "react";
import axios from "axios";

function LoginPage() {
  
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    }

    axios.post("http://localhost:5000/login", user)
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
  }
 
  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form">
        <div className="form-group">
          <label for="username">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter password" />
        </div>
      </div>
      <button onClick={submitHandler} className="btn btn-primary">Login</button>
    </div>
  );
}

export default LoginPage;
