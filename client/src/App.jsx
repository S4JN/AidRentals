import { Route, Routes } from "react-router-dom"
import { Home, Login, Register } from "./pages/index.js"
import AboutUs from "./pages/AboutUs.jsx"


function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
        </Routes>

      </div>

    </>
  )
}

export default App