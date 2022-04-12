import './App.css';
import CapitalizeInput from './Components/CapitalizeInput';
import Counter from './Components/Counter';
import PrintNames from './Components/PrintNames';
import Parent from './Components/ParentAndChild';
import React, { useState } from 'react';

const persons = [{ firstName: "Elad", lastName: "Zucker" },
{ firstName: "John", lastName: "Doe" },
{ firstName: "Dan", lastName: "Levi" }];


function App() {

  const addChilds = () => {
    setChilds(currentChilds => [...currentChilds, addChilds]);
  };
  const [Childs, setChilds] = useState([addChilds]);

  return (
    <div className="App">
      <div className="capContainer">
        <CapitalizeInput startText="start text" />
      </div>
      <hr />
      <div className="counterContainer">
        <Counter />
      </div>
      <hr />
      <div className="printNamesContainer">
        <PrintNames persons={persons}></PrintNames>
      </div>
      <hr />
      <div className="parentContainer">
        <Parent childs={Childs} />
      </div>
    </div>
  );
}

export default App;
