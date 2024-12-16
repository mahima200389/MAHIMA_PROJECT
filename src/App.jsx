import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import chat from './pages/chat/chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/chat' element={<chat/>}/>
    <Route path='/profile' element={<ProfileUpdate/>}/>
        </Routes>
    </>
  )
}

export default App