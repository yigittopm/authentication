import { useState, useEffect} from "react";
import axios from "axios";

const LoginPage= ({ history }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);
  
  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const user = {
      email,
      password
    }

    try {
      const { data } = await axios.post(
        "/login",
        user,
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }
 
  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form">
        <div className="form-group">
          <label for="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter email" />
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
