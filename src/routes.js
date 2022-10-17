import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About/about'
import Skills from './Skills/skills'
import Contact from './Contact/contact'
import Test from './test'
import CallbackPage from './CallbackPage'

const AppRouter = () => (
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/test' element={<Test />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/' element={<CallbackPage />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
)
export default AppRouter;
