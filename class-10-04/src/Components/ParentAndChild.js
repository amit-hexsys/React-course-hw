/* 
   - Parent can now recieve childs as prop by an array
   - Each child should have a button.
   - Clicking on a button cause the parent to create a new child.
*/

const Child = ({ clickEvent, ...props }) => {
    return (
        <div className="child">
            <p>I'm dani</p>
            <button onClick={clickEvent}>{props.text}</button>
        </div>
    )
}



const Parent = (props) => {
    return (
        <>
            {
                props.childs?.map((child, idx) => {
                    return <Child clickEvent={child} key={idx} text={"Add child"} />;
                })
            }

        </>
    )
}

export default Parent;
