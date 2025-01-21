import React, { useState, useEffect } from "react";
import axios from "axios";
import Password from "./passwordGenerator/password";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const [file, setFile] = useState(null);
  // const [mediaFiles, setMediaFiles] = useState([]);
  // const handleShowMedia = () => {
  //   axios
  //     .get("http://localhost:4000/getMedia")
  //     .then((res) => {
  //       setMediaFiles(res?.data?.mediaFile);
  //       console.log(res?.data?.mediaFile);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };
  // useEffect(() => {
  //   handleShowMedia();
  // }, []);
  
  // const handleSubmitData = () => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   axios
  //     .post("http://localhost:4000/sendMedia", formData)
  //     .then((res) => {
  //       alert("SuccessFully Uploaded files!");
  //       handleShowMedia();
  //     })
  //     .catch((err) => {
  //       alert('Error Occur while Submitting');
  //     });
  // };
  return (
    // <div className="min-h-screen bg-gray-100 p-6">
    //   <div className="max-w-4xl mx-auto space-y-6">
    //     <div className="bg-white shadow-md rounded-lg p-6">
    //       <input
    //         type="file"
    //         onChange={(e) => setFile(e.target.files[0])}
    //         className="block w-full text-sm text-gray-500
    //                    file:mr-4 file:py-2 file:px-4
    //                    file:rounded-lg file:border-0
    //                    file:bg-blue-50 file:text-blue-700
    //                    hover:file:bg-blue-100"
    //       />
    //       <button
    //         onClick={handleSubmitData}
    //         className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
    //       >
    //         Upload File
    //       </button>
    //     </div>

    //     {/* Media Display Section */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //       {mediaFiles.map((item, index) => (
    //         <div
    //           key={index}
    //           className="rounded-lg overflow-hidden shadow-md bg-white"
    //         >
    //           {item.type === "image" ? (
    //             <img
    //               src={item.url}
    //               alt="Media"
    //               className="w-full h-48 object-cover"
    //             />
    //           ) : (
    //             <video controls className="w-full h-48">
    //               <source src={item.url} type="video/mp4" />
    //               Your browser does not support the video tag.
    //             </video>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
    <ToastContainer/>
    <Password/>
    </>
  );
};

export default App;
