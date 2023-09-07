import { Route, Routes } from "react-router-dom"
import { Home, Login, Register, List, Detail, ViewProfile } from "./pages/index.js"
import AboutUs from "./pages/AboutUs.jsx"
import PublicRoute from "./components/Routes/PublicRoute"
import ProtectedRoute from "./components/Routes/ProtectedRoute"


function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }>

          </Route>
          <Route path="/login" element={
            <PublicRoute>

              <Login />
            </PublicRoute>
          }></Route>

          <Route path="/register" element={
            <PublicRoute>

              <Register />
            </PublicRoute>
          }>
          </Route>

          <Route path="/explore" element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }>
          </Route>

          <Route path="/detail" element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }>
          </Route>

          <Route path="/AboutUs" element={
            <AboutUs />
          }>
          </Route>

          




          <Route path="/ViewProfile" element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>

          }></Route>


        </Routes>

      </div>

    </>
  )
}

export default App
