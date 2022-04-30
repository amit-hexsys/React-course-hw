import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <p>Default</p>
      <Button variant="contained" state="default">Button</Button>
      <Button variant="outline" state="default">Button</Button>
      <Button variant="text" state="default">Button</Button>
      <p>Disabled</p>
      <Button variant="contained" state="disabled">Button</Button>
      <Button variant="outline" state="disabled">Button</Button>
      <Button variant="text" state="disabled">Button</Button>
      <p>Colors - secondary</p>
      <Button variant="contained" state="default" color="secondary">Button</Button>
      <Button variant="outline" state="default" color="secondary">Button</Button>
      <Button variant="text" state="default" color="secondary">Button</Button>
      <p>Colors - success</p>
      <Button variant="contained" state="default" color="success">Button</Button>
      <Button variant="outline" state="default" color="success">Button</Button>
      <Button variant="text" state="default" color="success">Button</Button>
      <p>Colors - error</p>
      <Button variant="contained" state="default" color="error">Button</Button>
      <Button variant="outline" state="default" color="error">Button</Button>
      <Button variant="text" state="default" color="error">Button</Button>
      <p>Sizes - large</p>
      <Button variant="contained" state="default" size="large">Button</Button>
      <Button variant="outline" state="default" size="large">Button</Button>
      <Button variant="text" state="default" size="large">Button</Button>
      <p>Sizes - medium</p>
      <Button variant="contained" state="default" size="medium">Button</Button>
      <Button variant="outline" state="default" size="medium">Button</Button>
      <Button variant="text" state="default" size="medium">Button</Button>
      <p>Sizes - small</p>
      <Button variant="contained" state="default" size="small">Button</Button>
      <Button variant="outline" state="default" size="small">Button</Button>
      <Button variant="text" state="default" size="small">Button</Button>
    </div>
  );
}

export default App;
