import { useState } from "react"

const PrintNames = ({ persons, ...props }) => {

    const [searchValue, setSearchValue] = useState("");
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);        
    }

    const filteredPersons = persons.filter(person => 
    {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
    });
 
    return (
        <>
            <label>Search :</label>
            <input onChange={onSearchValueChange} type="text"></input>
            { filteredPersons.length === 0 ?
                <p>No persons in array.</p> :
                <>
                    {filteredPersons.map((person, idx) => 
                        <p key={idx}>{person.firstName} {person.lastName} {person.phoneNumber}</p>
                    )}
                </>
            }
        </>
    )
}

export default PrintNames;