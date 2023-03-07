import './App.css'
import Lista1 from './components/Lista1'
import EstadoContador from './provider/EstadoContador'
import Lista2 from './components/Lista2'
import Lista3 from './components/Lista3'

function App() {
  /** paso3: asignando los hijos que van tener acceso al contexto */
  return (
    <EstadoContador>
      <div className="App">
        <Lista1 count={14}/>

        <Lista2 />

        <Lista3 />
      </div>
    </EstadoContador>
    
  )
}

export default App
