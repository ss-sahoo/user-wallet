import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Data from './pages/data/Data';
import Home from './pages/home/Home';
import Navbar from "./components/Navbar/Navbar";
import Transaction from './pages/transcation/Transaction';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/data" element={<Data />} />
</Routes>
    </Router>
  );
}

export default App;
