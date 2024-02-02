import logo from './logo.svg';
import './App.css';
import Hero_section from './component/Hero_section';
import Mision from './component/Mision';
import Slots from './component/Slots';
import Potenciando from './component/Potenciando';
import Elegirnos from './component/Elegirnos';
import Nuestars from './component/Nuestars';
import Ellos from './component/Ellos';
import Preguntas from './component/Preguntas';
import Last_section from './component/Last_section';
import Backtotop from './component/comman/Backtotop';
import Preloader from './component/comman/Preloader';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
    useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, [])
  return (
    <div className=" overflow-hidden">
      < Hero_section />
      < Mision />
      < Slots />
      < Potenciando />
      < Elegirnos />
      <Nuestars />
      <Ellos />
      < Preguntas />
      <Last_section />
      <Backtotop />
      < Preloader/>
    </div>
  );
}

export default App;
