import Navbar from './components/Navbar'
import Sobre from './components/Sobre';
import Treinos from './components/Treinos';
import Mestres from './components/Mestres'
import Contramestres from './components/Contramestres';
import Arquivos from './components/Arquivos';
import Footer from './components/Footer';
import Evento from './components/Evento'

function App() {
  return (
    <>
      <Navbar />
      <Sobre />
      <Mestres />
      <Contramestres />
      <Treinos />     
      <Arquivos />   
      <Evento />  
      <Footer />
    </>
  );
}

export default App;
