import Carros from './components/Carros';
import Cabecalho from './components/Cabecalho';
import Parceiros from './components/Parceiros';

function App() {

  var multiplica = (num1, num2) => {
    return num1 * num2
  }

  const listaCarros = ['Ford', 'Porsche', 'Rolls Royce', 'Toyota', 'Chevrolet']

  return (
    <>
      <Cabecalho/>
      <Carros carros = {listaCarros}/>
      <Parceiros multiplica = {multiplica}/>
    </>
  );
}

export default App;
