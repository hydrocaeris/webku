import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

// Komponen App: menggabungkan komponen Header, Content, dan Footer menggunakan komposisi
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
