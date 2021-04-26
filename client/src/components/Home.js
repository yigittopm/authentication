import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container mt-3">
            <Link className="btn btn-light" to="/login">LOGIN</Link>
            <hr/>
            <Link className="btn btn-light" to="/register">REGISTER</Link>
        </div>
    )
}

export default Home;