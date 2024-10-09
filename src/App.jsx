import CarouselTest from "./components/CarouselTest"
import BasicExample from "./components/Menu"
import Tabela from "./components/Tabela"
import Example from "./components/Modal"

function App() {


  return (
    <div className="container border">
      <BasicExample/>
      <Example/>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 bg-primary-subtle border border-2 border-white p-2">Coluna 1</div>
        <div className="col-md-6 col-lg-4 col-xl-3 bg-primary-subtle border border-2 border-white p-2">Coluna 2</div>
        <div className="col-md-6 col-lg-4 col-xl-3 bg-primary-subtle border border-2 border-white p-2">Coluna 3</div>
        <div className="col-md-6 col-lg-4 col-xl-3 bg-primary-subtle border border-2 border-white p-2">Coluna 4</div>
        <CarouselTest />
        <Tabela/>
      </div>
    </div>

  )
}

export default App
