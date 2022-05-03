import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Profile = (props) => {
    let location = useLocation();
    console.log(location.state);
    const [studentData, setStudentData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/APIs/students.json').then(res=>{
            console.log(res.data[location.state.from]);
            setStudentData(res.data[location.state.from]);
        })
    },[]);

    return ( <>
            <h2>{studentData.name}</h2>
            <img src={studentData.imgSrc} alt=""/> <br/>
            Email: <b>{studentData.email}</b> <br/>
            O mnie: <b>{studentData.desc}</b>
        </>
        );
};

export default Profile;