// import React, { useCallback, useRef, useState } from 'react';
// import { toast } from 'react-toastify';

// const Password = () => {
//   const [password, setPassword] = useState('');
//   const [specialChar, setSpecialC] = useState(false);
//   const [numbers, setNumbers] = useState(false);
//   const [length, setLength] = useState(8);
// const copyHighlight = useRef();
//   const handlePasswordGenerator = useCallback(() => {
//     let pass = '';
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const digits = '0123456789';
//     const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
//     const chars = letters + (numbers ? digits : '') + (specialChar ? special : '');

//     for (let i = 0; i < length; i++) {
//       pass += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     setPassword(pass);
//   }, [length, numbers, specialChar]);

//   const handleCopyToClipboard = () => {
//     copyHighlight.current?.select()
//    navigator.clipboard.writeText(password).then(() => {
//       toast.success('Password copied to clipboard!', {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//     });
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-gray-700">Password Generator</h1>

//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//         <div className="mb-4 flex items-center">
//           <input
//             type="text"
//             value={password}
//             ref={copyHighlight}
//             placeholder="Generated password will appear here"

//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//           />
//           <button
//             onClick={handleCopyToClipboard}
//             className="ml-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             Copy
//           </button>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2 font-medium">Password Length: {length}</label>
//           <input
//             type="range"
//             value={length}
//             min="6"
//             max="100"
//             onChange={(e) => setLength(Number(e.target.value))}
//             className="w-full"
//           />
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             id="numberC"
//             type="checkbox"
//             checked={numbers}
//             onChange={() => setNumbers(!numbers)}
//             className="mr-2"
//           />
//           <label htmlFor="numberC" className="text-gray-700">Include Numbers</label>
//         </div>

//         <div className="flex items-center mb-4">
//           <input
//             id="specialChar"
//             type="checkbox"
//             checked={specialChar}
//             onChange={() => setSpecialC(!specialChar)}
//             className="mr-2"
//           />
//           <label htmlFor="specialChar" className="text-gray-700">Include Special Characters</label>
//         </div>

//         <button
//           onClick={handlePasswordGenerator}
//           className="w-full px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         >
//           Generate Password
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Password;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
function MainComponent() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currencyNames, setCurrencyNames] = useState([]);

  console.log(toCurrency, fromCurrency);
  const handleCountryName = () => {
    axios
      .get("https://openexchangerates.org/api/currencies.json")
      .then((res) => {
        const counntrynames = Object.keys(res.data);
        setCurrencyNames(counntrynames);
      });
  };
  const handleCurrencyPrice = () => {
    if (!amount) {
      setError("Please enter an amount");
      return;
    }
    if(!toCurrency ||!fromCurrency){
      toast.error('Select Currency First!')
      return
    }
    setLoading(true);
    setError(null);
    setIsFlipped(true);
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${toCurrency}`)
      .then((res) => {
        const result = res.data.rates[fromCurrency] * amount;
        setResult(result.toFixed(2));
        console.log(result);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleCountryName();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 perspective-[1000px]">
      <div
        className={`max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 transition-all duration-700 hover:scale-105 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`${
            isFlipped ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6 font-roboto animate-bounce">
            Currency Converter
          </h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <select
                  defaultValue={"Select Currency"}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {currencyNames.map((name, index) => {
                    return (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To
                </label>
                <select
  onChange={(e) => setToCurrency(e.target.value)}
  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
  value={toCurrency} // Makes the select controlled
>
  <option value="" disabled>
    Select Currency
  </option>
  {currencyNames.map((name, index) => (
    <option key={index} value={name}>
      {name}
    </option>
  ))}
</select>
              </div>
            </div>

            <button
              onClick={handleCurrencyPrice}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
            >
              {loading ? "Converting..." : "Convert"}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-md">
                <p className="text-center text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>

        {result && !error && (
          <div
            className={`absolute inset-0 bg-white rounded-xl p-6 backface-hidden ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              transform: `rotateY(${isFlipped ? "0deg" : "180deg"})`,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center text-2xl font-semibold animate-pulse">
                {amount} {fromCurrency} {currencyNames[fromCurrency]} = {result}{" "}
                {toCurrency} {currencyNames[toCurrency]}
              </p>
              <button
                onClick={() => {setIsFlipped(false);setAmount('')}}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Convert Again
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .perspective-[1000px] {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes float {
          0% {
            transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
          }
          50% {
            transform: translateY(-20px) rotate3d(1, 1, 1, 5deg);
          }
          100% {
            transform: translateY(0px) rotate3d(1, 1, 1, 0deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-5%) scale(1);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0) scale(1.05);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1) rotate3d(0, 1, 0, 0deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05) rotate3d(0, 1, 0, 5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate3d(0, 1, 0, 0deg);
          }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
