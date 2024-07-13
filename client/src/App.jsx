import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blogs' element={<Blogs />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
