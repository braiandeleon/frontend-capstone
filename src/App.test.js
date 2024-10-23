import { render, screen } from "@testing-library/react";
import App from './App'
import React from 'react';
import './index.css';
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
  render(  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
</React.StrictMode>);  
  
    const headingElement = screen.getByText("Featured Projects");
    expect(headingElement).toBeInTheDocument();
})