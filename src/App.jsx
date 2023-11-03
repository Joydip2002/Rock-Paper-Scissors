// Traffic Light
// import React, { useState, useEffect } from 'react';
// import './App.css'
// function App() {
//   const [activeLight, setActiveLight] = useState('red');
//   const [time, setTime] = useState();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       switch (activeLight) {
//         case 'red':
//           setActiveLight('green');
//           setTimeout(() => setActiveLight('yellow'), 3000);
//           break;
//         case 'yellow':
//           setActiveLight('red');
//           break;
//         case 'green':
//           setActiveLight('yellow');
//           setTimeout(() => setActiveLight('red'), 500);
//           break;
//         default:
//           break;
//       }
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [activeLight,setTime]);

//   return (
//     <>
//       <div className="traffic">
//         <div className={activeLight === 'red' ? 'circle red' : 'circle'}></div>
//         <div className={activeLight === 'yellow' ? 'circle yellow' : 'circle'}></div>
//         <div className={activeLight === 'green' ? 'circle green' : 'circle'}></div>
//       </div>
//     </>
//   );
// }

// export default App;


// Rock Paper scissors
import Rps from "./components/Rps";
export default function App(){
  return(
    <>
    <Rps/>
    </>
  )
}
