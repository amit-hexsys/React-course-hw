import "./Person.css";

const Person = (props) => {
    return (
        <div className="person">
            <p>{props.name}</p>
            <p>{props.city}</p>
            <p>{props.gender}</p>
        </div>
    );
}

export default Person;