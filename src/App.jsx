// import Homepage from "./Pages/HomePage";
// import NotFoundPage from "./Pages/NotFoundPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import SplashScreen from "./Components/SplashScreen"; // 👈

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
