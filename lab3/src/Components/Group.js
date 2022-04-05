import React from 'react';

class Group extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchBy: "NAME",
            query: "",
        }
    }

    handleSearchByChange = (event) => {
        this.setState({
            searchBy: event.target.value
        });
    }

    handleQueryChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    render(){
        const groupsHTML = this.props.groups
        .filter((it) =>      
            (this.state.searchBy === "NAME") ? it.name.includes(this.state.query) : 
            (this.state.searchBy === "MEMB") ? it.members.some((member) => member.includes(this.state.query)) : 
            (this.state.searchBy === "DESC") ? it.desc.includes(this.state.query) : 
            (this.state.searchBy === "SUBJ") ? it.subject.includes(this.state.query) : true
        )
        .map((it, i) => {
            return <div key={i}>
                <div className="Group-name">Nazwa: {it.name}</div>
                <div className="Group-members-list">
                    Skład grupy:
                    {
                        it.members.map((member_it, member_i) => {
                            return <div key={member_i} className="Group-members-item">
                            {member_it}
                            </div>
                        })
                    }
                </div>
                <div className="Group-desc">Opis: {it.desc}</div>
                <div className="Group-subject">Przedmiot: {it.subject}</div>
            </div>
        });

        return (
            <div>
            <p>Wyszukaj grupy</p>
            <label for="whichListG">Wyszukaj po:</label>
            <select name="whichListG" id="whichListG" onChange={this.handleSearchByChange}>
              <option value="NAME">Nazwie</option>
              <option value="MEMB">Członkach projektu</option>
              <option value="DESC">Opisie</option>
              <option value="SUBJ">Przedmiocie</option>
            </select>
            <br/>
            <input type="text" name="queryG" id="queryG" required="" value={this.state.query} onChange={this.handleQueryChange}/>
               {groupsHTML} 
            </div>
        )
    }
}

export default Group;