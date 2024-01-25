import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponents from './Components/ListEmployeeComponents'
import HeaderComponent from './Components/HeaderComponent'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'
import GlassmorphismLoginForm from './Components/test'

function App() {
 

  return (
    <>
    <div id='root' style={{ background: 'radial-gradient(black, transparent)' ,height:'100vh' }}>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/employees' element ={<ListEmployeeComponents/>}>  </Route>
      <Route path='/add-employee' element={<EmployeeComponent/>} />
      <Route path='/edit-employee/:id' element={<EmployeeComponent/>} />
      {/* <Route path='/test' element={<GlassmorphismLoginForm/>} /> */}
     
    </Routes>
    
    </BrowserRouter>
    </div>
    
    </>
  )
}

export default App
