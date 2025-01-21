import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    <>
    <ToastContainer/>
    <CurrencyConverter/>
    </>
  );
};

export default App;
