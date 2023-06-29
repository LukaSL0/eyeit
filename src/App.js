import './App.css';
import Line from './components/modules/line.js';
import Header from './components/header.js';
import Home from './components/home.js';
import Features from './components/features.js';
import Stats from './components/stats.js';
import Faq from './components/faq.js';
import Footer from './components/footer.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Stats />
      <Faq />
        <Line />
      <Footer />
    </div>
  );
}

