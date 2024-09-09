import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './about';
import Navbar from './navbar';
import NotFound from './404';

 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="#" element={<NotFound />} />

      </Routes>
      </Router>
  );
}
 
export default App;
 
 