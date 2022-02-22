import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import BucketList from "./components/Page/BucketList";
import Collections from "./components/CollectionsPage/Collections";
import International from "./components/Page/International";
import Horror from "./components/Page/Horror";
import Meta from "./components/Page/Meta";
import TrueStory from "./components/Page/TrueStory";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/bucket-list" element={<BucketList />} />
        <Route exact path="/collections" element={<Collections />} />

        <Route exact path="/international" element={<International />} />
        <Route exact path="/horror" element={<Horror />} />
        <Route exact path="/meta" element={<Meta />} />
        <Route exact path="/True-Story" element={<TrueStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
