import './App.css';
import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import db from './data/db.json'
import { Route,Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Home data ={db}/>}/>      {/* passing the data as props to Home*/}
<Route path='/city/:id' element={<TourDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
