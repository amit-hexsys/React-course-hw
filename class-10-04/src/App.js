import './App.css';
import CapitalizeInput from './Components/CapitalizeInput';
import Counter from './Components/Counter';
import PrintNames from './Components/PrintNames'

const persons = [{ firstName: "Elad", lastName: "Zucker" },
{ firstName: "John", lastName: "Doe" },
{ firstName: "Dan", lastName: "Levi" }]

function App() {
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
    </div>
  );
}

export default App;
