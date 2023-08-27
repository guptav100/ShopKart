import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import Items from './Components/Items';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroBanner/>
      <Items/>
      <Contact/>
    </div>
  );
}

export default App;
