import "./PersonList.css";
import Person from "./Person";

const PersonList = (props) => {
    const { title } = props
    return (
        <>
            <div className='PersonListContainer'>
                <Person name="Daniel" city="TLV" gender="Male👨🏻" />
                <Person name="Noa" city="Jesusalem" gender="Female👩🏻" />
                <Person name="Dan" city="Netanya" gender="Male 👨🏻" />
            </div>
        </>
    );
}

export default PersonList;