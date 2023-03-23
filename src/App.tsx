import React, { useState} from 'react';
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
