import '../Styles/Add.css';
import { useState } from 'react';

const Add = (props) => {
    const {setStudents, students} = props;

    const [newStudentName, setNewStudentName] = useState("");
    const [newStudentEmail, setNewStudentEmail] = useState("");
    const [newStudentDesc, setNewStudentDesc] = useState("");
    const [newStudentTags, setNewStudentTags] = useState("");
    const [newStudentSubjects, setNewStudentSubjects] = useState("");

    const handleNameChange = (event) => {
        setNewStudentName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setNewStudentEmail(event.target.value);
    }

    const handleDescChange = (event) => {
        setNewStudentDesc(event.target.value);
    }

    const handleTagListChange = (event) => {
        setNewStudentTags(event.target.value);
    }

    const handleSubjListChange = (event) => {
        setNewStudentSubjects(event.target.value);
    }

    const handleEnter = () => {
        setStudents(students.concat({
            name: newStudentName,
            email: newStudentEmail,
            desc: newStudentDesc,
            tags: newStudentTags.split(" "),
            subjects: newStudentSubjects.split(" ")
        }));
        setNewStudentName("");
        setNewStudentEmail("");
        setNewStudentDesc("");
        setNewStudentTags("");
        setNewStudentSubjects("");
    }

    return (
        <div className="Add-main">
            <p>Dodaj własne ogłoszenie</p>
            <form>
                <label for="name">Imię i nazwisko:</label>
                <input id="name" name="name" onChange={handleNameChange}/>
                <br/>
                <label for="email">Adres mailowy:</label>
                <input id="email" name="email" onChange={handleEmailChange}/>
                <br/>
                <label for="desc">Opis:</label>
                <input id="desc" name="desc" onChange={handleDescChange}/>
                <br/>
                <label for="taglist">Lista tagów (FS=" "):</label>
                <input id="taglist" name="taglist" onChange={handleTagListChange}/>
                <br/>
                <label for="subjlist">Lista przedmiotów (FS=" "):</label>
                <input id="subjlist" name="subjlist" onChange={handleSubjListChange}/>
                <br/>
                <button type="button" onClick={handleEnter}>Dodaj</button>
            </form>
        </div>
    );
}

export default Add;