import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <SignUp/>
      <Login/>
      <ParkingSpace/>
    </div>

  );
}

export default App;
