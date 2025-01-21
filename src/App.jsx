import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";

const App = () => {
  
  return (

    <>
    <ToastContainer/>
    <CurrencyConverter/>
    </>
  );
};

export default App;
