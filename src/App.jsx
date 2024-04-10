
import './App.css'
import Categories from './Categories.jsx'
import NavBar from './NavBar.jsx'
import Appliances from './Appliances.jsx'
import Offers from './Offers.jsx'


function App() {
  

  return (
    <>
   
   <NavBar></NavBar>
    <Categories></Categories>
    <Appliances></Appliances>
    <Offers></Offers>
     {/* <h1 className='bg-red-600 p-2'>Tailwind in React</h1> */}
    </>
  )
}

export default App
