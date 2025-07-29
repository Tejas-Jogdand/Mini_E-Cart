import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import  NotFound  from "./pages/NotFound";
import Cart from "./pages/Cart"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
