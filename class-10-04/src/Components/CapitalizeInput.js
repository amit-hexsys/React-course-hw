import { useState } from 'react'
const CapitalizeInput = (props) => {

    const onChangeEvent = (event) => {
        //set the state value
        setValue(event.target.value);
    }

    //declare a state variable to be use as the input value
    let [value, setValue] = useState(props.startText);
    console.log(value);
    return (
        <>
            <input value={value}
                type="text"
                onChange={onChangeEvent}></input>

            <p>{value.toUpperCase()}</p>
        </>
    )
}

export default CapitalizeInput;