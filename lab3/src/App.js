import './App.css';
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Group from "./Components/Group";
import AddGroup from "./Components/AddGroup";
import Profile from "./Components/Profile";
import SignIn from './Components/SignIn';
import {Routes, Route, NavLink, HashRouter} from 'react-router-dom';
import axios from 'axios';
import SignInContext from './Contexts/SignInContext';
import Login from './Components/Login';
import Register from './Components/Register';
import { auth } from './firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout } from './firebase/users';

function App() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  const [userInny] = useAuthState(auth);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/qucker135/PIW/main/lab3/public/APIs/students.json').then(res => {
      setStudents(res.data);
    });

    axios.get('https://raw.githubusercontent.com/qucker135/PIW/main/lab3/public/APIs/groups.json').then(res => {
      setGroups(res.data);
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tinder dla projektów &lt;3</h2>
      </header>
      <main>
        <SignInContext.Provider value={useState("")}>
        <HashRouter>
        <nav>
          <NavLink to="/tinder">Home</NavLink><br/>
          <NavLink to="/add">Dodaj własne ogłoszenie</NavLink><br/>
          <NavLink to="/groups">Szukanie grup</NavLink><br/>
          <NavLink to="/add-group">Dodaj grupę</NavLink><br/>
          <NavLink to="/signin">Zaloguj się</NavLink><br/>
          {
            userInny
            && <button onClick={logout} >Wyloguj się {userInny.displayName}</button>
            || <><NavLink to="/login">Zaloguj się głupio</NavLink> </>
            }
        </nav>
                
        <Routes>
          <Route path="/tinder" element={<Home students={students} setStudents={setStudents} />}/>
          <Route path="/add" element={<Add students={students} setStudents={setStudents} />}/>
          <Route path="/groups" element={<Group groups={groups} setGroups={setGroups} />}/>
          <Route path="/add-group" element={<AddGroup groups={groups} setGroups={setGroups} />}/>
          <Route path="/profile" element={<Profile students={students} setStudents={setStudents} />}/>
          <Route path="/signin" element={<SignIn students={students} setStudents={setStudents} />}/>
          <Route path="/login" element={<Login students={students} setStudents={setStudents} />}/>
          <Route path="/register" element={<Register students={students} setStudents={setStudents} />}/>
        </Routes>
        </HashRouter>
        </SignInContext.Provider>
      </main>
      <footer className="App-footer">&copy; qucker135</footer>
    </div>
  );
}

export default App;
