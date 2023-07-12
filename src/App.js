import './App.css';
import Home from './components/Home/Home';
import db from './data/db.json'
function App() {
  return (
    <div className="App">
     <Home data={db}/>           {/* passing the data as props to Home*/}
    </div>
  );
}

export default App;
