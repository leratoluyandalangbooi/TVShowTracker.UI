// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ShowPage from './pages/ShowPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
//
// function App() {
//     return (
//         <Router>
//             <div className="app">
//                 <Header />
//                 <main>
//                     <Routes>
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/show/:id" element={<ShowPage />} />
//                         <Route path="/login" element={<LoginPage />} />
//                         <Route path="/register" element={<RegisterPage />} />
//                     </Routes>
//                 </main>
//                 <Footer />
//             </div>
//         </Router>
//     );
// }
//
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage.jsx";
import ShowPage from './pages/ShowPage';
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/show/:id" element={<ShowPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;