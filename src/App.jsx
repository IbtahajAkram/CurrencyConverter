import React, { useState, useEffect } from "react";
import axios from "axios";
import Password from "./passwordGenerator/password";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    <>
    <ToastContainer/>
    <Password/>
    </>
  );
};

export default App;
