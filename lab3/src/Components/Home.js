import { useState, useReducer } from 'react';
import {Link} from 'react-router-dom';
import { ObserverContext, initState, reducer } from '../Contexts/ObserverContext';

const Home = (props) => {
    const {setStudents, students} = props;

    const [studentsQuery, setStudentsQuery] = useState("");
    const [studentsValue, setStudentsValue] = useState("DESC");

    const [state, dispatcher] = useReducer(reducer, initState);

    const handleQueryChange = (event) => {
        setStudentsQuery(event.target.value);
    }
    const handleValueChange = (event) => {
        console.log(event.target.value);
        setStudentsValue(event.target.value);
        console.log(studentsValue); //left these two console.logs, because that's an interesting observation
    }

    const studentsHTML = students.filter((it) => 
        (studentsValue === "DESC") ? it.desc.includes(studentsQuery) : 
        (studentsValue === "TAGS") ? it.tags.some(el => el.includes(studentsQuery)) : 
        (studentsValue === "SUBJ") ? it.subjects.some(el => el.includes(studentsQuery)) : true
    )
    .map((it, i)=>{ //bad practise: https://pl.reactjs.org/docs/lists-and-keys.html#keys

        return <div key={i}>
            <div className="Home-photo"><Link to="/profile" state={{ from: i}}><img src={it.imgSrc} alt=""/></Link></div>
            <button onClick={()=>dispatcher({type: "TOGGLE", payload: i})}>{state.observed.includes(i) ? state.captionOn : state.captionOff}</button>
            <div className="Home-name">{it.name}</div>
            <div className="Home-desc">Opis: {it.desc}</div>
            <div className="Home-tags-list">
                Tagi:
                {
                    it.tags.map((tag_it, tag_i) => {
                        return <div key={tag_i} className="Home-tags-item">
                        {tag_it}
                        </div>
                    })
                }
            </div>
            <div className="Home-subjects-list">
                Szukam grupy do przedmiotów:
                {
                    it.subjects.map((subject_it, subject_i) => {
                        return <div key={subject_i} className="Home-subject-item">
                           {subject_it}
                        </div>
                    })
                }
            </div>
        </div>
    });

    return ( //JSX
        <div>
            <p>Wyszukaj ogłoszenia innych</p>
            <label htmlFor="whichList">Wyszukaj po:</label>
            <select name="whichList" id="whichList" onChange={handleValueChange}>
              <option value="DESC">Opisie</option>
              <option value="TAGS">Tagach</option>
              <option value="SUBJ">Przedmiotach</option>
            </select>
            <br/>
            <input type="text" name="query" id="query" required="" value={studentsQuery} onChange={handleQueryChange}/>
            {studentsHTML}
        </div>
    )
}

export default Home;