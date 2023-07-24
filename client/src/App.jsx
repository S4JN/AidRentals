import { Route, Routes } from "react-router-dom"
import { Home, Login, Register } from "./pages/index.js"


function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
          
          <Route path="/register" element={<Register />}></Route>
        </Routes>

      </div>

    </>
  )
}

export default App
