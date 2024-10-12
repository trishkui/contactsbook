
import './App.css'
import Contactinput from "./Contact/Contactinput";
import Contactitem from './Contact/Contactitem';
import Contactlist from './Contact/Contactlist'; 
function App() {


  return (
    <>
     <h1>contacts book</h1> 
     <Contactinput />
     <Contactlist />
     {/* <Contactitem /> */}
    </>
  )
}

export default App
