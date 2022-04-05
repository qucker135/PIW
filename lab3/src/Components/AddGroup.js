import React from 'react';

class AddGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            members: "",
            desc: "",
            subject: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleMembersChange = (event) => {
        this.setState({
            members: event.target.value
        });
    }

    handleDescChange = (event) => {
        this.setState({
            desc: event.target.value
        });
    }
    
    handleSubjectChange = (event) => {
        this.setState({
            subject: event.target.value
        });
    }

    handleEnter = () => {
        this.props.setGroups(this.props.groups.concat({
            name: this.state.name,
            members: this.state.members.split(","),
            desc: this.state.desc,
            subject: this.state.subject
        }));
        this.setState({
            name: "",
            members: "",
            desc: "",
            subject: ""
        })
    }

    render(){
        return (
            <div className="AddGroup-main">
                <p>Dodaj grupę</p>
                <form>
                <label for="name">Nazwa grupy:</label>
                    <input id="name" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                    <br/>
                    <label for="members">Imiona i nazwiska członków (FS=","):</label>
                    <input id="members" name="members" value={this.state.members} onChange={this.handleMembersChange}/>
                    <br/>
                    <label for="desc">Opis:</label>
                    <input id="desc" name="desc" value={this.state.desc} onChange={this.handleDescChange}/>
                    <br/>
                    <label for="subject">Przedmiot:</label>
                    <input id="subject" name="subject" value={this.state.subject} onChange={this.handleSubjectChange}/>
                    <br/>
                    <button type="button" onClick={this.handleEnter}>Dodaj</button>
                </form>
            </div>
        );
    }
}

export default AddGroup;