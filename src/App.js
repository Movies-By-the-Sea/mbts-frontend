import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import BucketList from "./components/Page/BucketList";
import Collections from "./components/CollectionsPage/Collections";
import International from "./components/Page/International";
import Horror from "./components/Page/Horror";
import Meta from "./components/Page/Meta";
import TrueStory from "./components/Page/TrueStory";
import Animated from "./components/Page/Animated";
import Romantic from "./components/Page/Romantic";
import SciFi from "./components/Page/SciFi";
import Action from "./components/Page/Action";
import Drama from "./components/Page/Drama";
import Thriller from "./components/Page/Thriller";
import Lighthearted from "./components/Page/Lighthearted";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/bucket-list" element={<BucketList />} />
        <Route exact path="/collections" element={<Collections />} />

        <Route exact path="/collections/international" element={<International />} />
        <Route exact path="/collections/horror" element={<Horror />} />
        <Route exact path="/collections/meta" element={<Meta />} />
        <Route exact path="/collections/True-Story" element={<TrueStory />} />
        <Route exact path="/collections/animated" element={<Animated />} />
        <Route exact path="/collections/romantic" element={<Romantic />} />
        <Route exact path="/collections/sci-fi" element={<SciFi />} />
        <Route exact path="/collections/action" element={<Action />} />
        <Route exact path="/collections/drama" element={<Drama />} />
        <Route exact path="/collections/thriller" element={<Thriller />} />
        <Route exact path="/collections/lighthearted" element={<Lighthearted />} />
        <Route element={ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
