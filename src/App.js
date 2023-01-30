import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import  BasicExample from './Component/Navbar1';
import Home from './Pages/Home';
// import NavScrollExample from './Component/Navbar1';
function App() {
  return (
    <div className="App">
    <BasicExample/>
    <Home/>
    
    </div>
  );
}

export default App;