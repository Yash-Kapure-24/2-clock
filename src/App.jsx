import ClockHeading from "./components/ClockHeadeing"
import Moto from "./components/Moto"
import CurrentTime from "./components/CurrentTime"
import './App.css'

function App() {
 
  return (
  <center className="Container">
     <ClockHeading />
     <Moto />
     <CurrentTime />
  </center>
  )
}

export default App
