import './App.css';
import { useState } from "react";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Group from "./Components/Group";
import AddGroup from "./Components/AddGroup";
import Second from "./Components/Second";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([
    {
      name: "Mikołaj Czerniak",
      email: "mikolaj.czerniak@gmail.com",
      desc: "Młody, dynamiczny student",
      tags: ["c++", "verilog", "arduino", "php"],
      subjects: ["AK2", "PIW", "PIPG"]
    },
    {
      name: "Kulash Doomchuck",
      email: "kulash.doomchuck@gmail.com",
      desc: "Ekspert ds. budowy kompilatorów",
      tags: ["c++", "vhdl", "java", "php"],
      subjects: ["PIPG", "EAC", "ELE"]
    },
    {
      name: "Pen Pineapple",
      email: "apple.pen@gmail.com",
      desc: "Ekspert ds. JVM",
      tags: ["java", "kotlin", "groovy", "c#"],
      subjects: ["PJ", "WF", "AK2"]
    },
  ]);

  const [groups, setGroups] = useState([
    {
      name: "Wesoła grupa",
      members: ["Mikołaj Czerniak", "Kulash Doomchuck"],
      desc: "Młody, dynamiczny zespół",
      subject: "AK2"
    },
    {
      name: "MŚ 2022 - grupa C",
      members: ["Mikołaj Czerniak", "Pen Pineapple"],
      desc: "Stary, statyczny zespół",
      subject: "PIW"
    },
    {
      name: "Grupa wzajemnej adoracji",
      members: ["Kulash Doomchuck", "Mik Gużdżanowski"],
      desc: "Dołącz do nas!",
      subject: "PIPG"
    },
    {
      name: "Drużyna A",
      members: ["Pen Pineapple", "Mat Bartysiak"],
      desc: "Szukamy kogoś takiego jak Ty!",
      subject: "ELE"
    },
    {
      name: "Załoga G",
      members: ["Tys Marbatsiak", "Mikołaj Czerniak"],
      desc: "A wise man once sed 's/sed/awk/g'",
      subject: "SO2"
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tinder dla projektów &lt;3</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/add">Dodaj własne ogłoszenie</NavLink><br/>
          <NavLink to="/groups">Szukanie grup</NavLink><br/>
          <NavLink to="/add-group">Dodaj grupę</NavLink><br/>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home students={students} setStudents={setStudents} />}/>
          <Route path="/add" element={<Add students={students} setStudents={setStudents} />}/>
          <Route path="/groups" element={<Group groups={groups} setGroups={setGroups} />}/>
          <Route path="/add-group" element={<AddGroup groups={groups} setGroups={setGroups} />}/>
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="App-footer">&copy; qucker135</footer>
    </div>
  );
}

export default App;
