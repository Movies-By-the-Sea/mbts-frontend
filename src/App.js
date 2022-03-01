import { Routes, Route, HashRouter } from "react-router-dom";

import Top30 from "./components/Page/Top30/Top30";
import About from './components/Page/AboutPage/About';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import LandingPage from './components/Page/LandingPage/LandingPage';
import Collections from './components/Page/CollectionsPage/Collections';

import { mapping } from './components/Page/CollectionsPage/mapping';
import CollectionCard from './components/common/CollectionCard/CollectionCard';

function App() {
  return (
    <HashRouter className="App">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/top30" element={<Top30 />} />

        {mapping.map((item) => {
          return (<Route
            key={item.name}
            exact path={`/collections/${item.link}`}
            element={
              <CollectionCard prop={item} />
            } />)
        })}

        <Route path="*" element={ErrorScreen} />
      </Routes>
    </HashRouter>
  );
}

export default App;
