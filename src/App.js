import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Blog from './Components/Blog';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Blog/> */}
      <Footer/>
    </div>
  );
}

export default App;
