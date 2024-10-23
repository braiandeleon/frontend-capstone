import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import BookingForm from './components/BookingForm.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

function App() {
  const initialTimes = [
    {
      id: 1,
      date: "monday",
      availability: [12],
    },
    {
      id: 2,
      date: "tuesday",
      availability:  [],
    },
    {
      id: 3,
      date: "wednesday",
      availability:  [],
    },
    {
      id: 4,
      date: "thursday",
      availability:  [],
    },
    {
      id: 5,
      date: "friday",
      availability:  [],
    }
  ];
  const submitAPI = function(formData) {
    return true;
  };

  return (
<>

      <ChakraProvider>

<Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/done" element={<Footer/>}></Route>
            <Route path="/reserve" element={<BookingForm initialTimes={initialTimes} submitAPIf={submitAPI}/>}></Route>
          </Routes>


      </ChakraProvider>
</>


  );
}

export default App;