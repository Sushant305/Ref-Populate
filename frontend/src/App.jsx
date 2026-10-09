import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Users from "./pages/Users"
import CreatePost from "./pages/CreatePost"


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>

      <BrowserRouter>
        <Navbar/>

        <main className='mx-auto max-w-6xl px-4 py-8'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/posts/create' element={<CreatePost/>}/>
          </Routes>

        </main>

      </BrowserRouter>

    </div>
  )
}

export default App
