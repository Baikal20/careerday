import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Careers from './pages/Careers'
import CareerDetails from './pages/CareerDetails'
import TryCareer from './pages/TryCareer'
import Reflection from './pages/Reflection'
import Progress from './pages/Progress'
import Login from './pages/Login'

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/careers"
                    element={<Careers />}
                />

                <Route
                    path="/careers/:id"
                    element={<CareerDetails />}
                />

                <Route
                    path="/try/:id"
                    element={<TryCareer />}
                />

                <Route
                    path="/reflection/:id"
                    element={<Reflection />}
                />

                <Route
                    path="/progress"
                    element={<Progress />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    )
}

export default App