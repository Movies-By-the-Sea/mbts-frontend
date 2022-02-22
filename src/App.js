import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import BucketList from "./components/Page/BucketList";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/bucket-list" element={<BucketList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
