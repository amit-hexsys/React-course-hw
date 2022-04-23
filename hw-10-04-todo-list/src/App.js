import './App.css';
import TaskList from './css-modules/Components/TaskList';
import Header from './css-modules/Components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <footer className='footer'><img src="abra-img.png" /></footer>
    </div>
  );
}

export default App;