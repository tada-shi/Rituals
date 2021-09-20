import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Section1 from './Component/Section1/Section1';
import Section2 from './Component/Section2/Section2';
import Section3 from './Component/Section3/Section3';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <section className="App">
      <Navbar/> 
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </section>
  );
}

export default App;
