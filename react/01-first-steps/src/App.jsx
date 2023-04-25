import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my React GitHub Repo by Juan Martin Madoz
        </p>
        {/*Here you import MyComponent like this: */}
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
