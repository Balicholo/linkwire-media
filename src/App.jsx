import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import FirstBlog from './pages/blogs/FirstBlog';
import SecondBlog from './pages/blogs/SecondBlog';
import ThirdBlog from './pages/blogs/ThirdBlog';
import ReadMore from './pages/ReadMore';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/first-blog" element={<FirstBlog />} />
          <Route path="/blog/second-blog" element={<SecondBlog />} />
          <Route path="/blog/third-blog" element={<ThirdBlog />}></Route>
          <Route path="/read-more" element={<ReadMore />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
          {/* Add more blog routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
