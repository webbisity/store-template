import { useState } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import Main from './Sections/Main';
import Footer from './Sections/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
