import { Routes, Route, HashRouter } from "react-router-dom";

import Top30 from "./components/Page/Top30/Top30";
import About from './components/Page/AboutPage/About';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import LandingPage from './components/Page/LandingPage/LandingPage';
import Collections from './components/Page/CollectionsPage/Collections';

import Meta from './components/Page/CollectionsPage/Collections/Meta';
import SciFi from './components/Page/CollectionsPage/Collections/SciFi';
import Drama from './components/Page/CollectionsPage/Collections/Drama';
import Horror from './components/Page/CollectionsPage/Collections/Horror';
import Action from './components/Page/CollectionsPage/Collections/Action';
import Thriller from './components/Page/CollectionsPage/Collections/Thriller';
import Animated from './components/Page/CollectionsPage/Collections/Animated';
import Romantic from './components/Page/CollectionsPage/Collections/Romantic';
import TrueStory from './components/Page/CollectionsPage/Collections/TrueStory';
import Essentials from './components/Page/CollectionsPage/Collections/Essentials';
import Lighthearted from './components/Page/CollectionsPage/Collections/Lighthearted';
import International from './components/Page/CollectionsPage/Collections/International';

function App() {
  return (
    <HashRouter className="App">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/top30" element={<Top30 />} />

        <Route exact path="/collections/meta" element={<Meta />} />
        <Route exact path="/collections/drama" element={<Drama />} />
        <Route exact path="/collections/sci-fi" element={<SciFi />} />
        <Route exact path="/collections/action" element={<Action />} />
        <Route exact path="/collections/horror" element={<Horror />} />
        <Route exact path="/collections/thriller" element={<Thriller />} />
        <Route exact path="/collections/animated" element={<Animated />} />
        <Route exact path="/collections/romantic" element={<Romantic />} />
        <Route exact path="/collections/True-Story" element={<TrueStory />} />
        <Route exact path="/collections/lighthearted" element={<Lighthearted />} />
        <Route exact path="/collections/mbts-essentials" element={<Essentials />} />
        <Route exact path="/collections/international" element={<International />} />

        <Route element={ErrorScreen} />
      </Routes>
    </HashRouter>
  );
}

export default App;
