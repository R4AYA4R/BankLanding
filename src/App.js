import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./utils/scrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
