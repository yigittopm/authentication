import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/register")
            .then(result => setUsers(result.data));
    },[])

    return(
        <div className="container">
            <ul className="list">
                {users.map(user => 
                    <li key={user._id}>
                        {user.username}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dashboard;