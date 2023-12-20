import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Future from './components/Future';
import Section2 from './components/Section2';
import Herosection from './components/Herosection';
function App() {
  return (
    <div>
      <Header />
      <Herosection/>
      <Section2/>
      <Future/>
      <Footer />
    </div>
  );
}

export default App;
