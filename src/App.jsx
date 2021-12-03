import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  const [apiFilter, setApiFilter] = useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  return (
    <>
      <Header setApiFilter={setApiFilter} />
      <Main setApiFilter={setApiFilter} apiFilter={apiFilter} />
      <Footer />
    </>
  );
}
export default App;
