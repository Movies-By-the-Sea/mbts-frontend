import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './components/Page/LandingPage/LandingPage';
import BucketList from './components/Page/BucketList';
import Collections from './components/Page/CollectionsPage/Collections';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';


import International from './components/Page/CollectionsPage/Collections/International';
import Horror from './components/Page/CollectionsPage/Collections/Horror';
import Meta from './components/Page/CollectionsPage/Collections/Meta';
import TrueStory from './components/Page/CollectionsPage/Collections/TrueStory';
import Animated from './components/Page/CollectionsPage/Collections/Animated';
import Romantic from './components/Page/CollectionsPage/Collections/Romantic';
import SciFi from './components/Page/CollectionsPage/Collections/SciFi';
import Action from './components/Page/CollectionsPage/Collections/Action';
import Drama from './components/Page/CollectionsPage/Collections/Drama';
import Thriller from './components/Page/CollectionsPage/Collections/Thriller';
import Lighthearted from './components/Page/CollectionsPage/Collections/Lighthearted';

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
        <Route element={ErrorScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
