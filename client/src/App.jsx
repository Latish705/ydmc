import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
