import { Routes, Route, BrowserRouter } from "react-router-dom";

import Top30 from "./components/Page/Top30/Top30";
import About from './components/Page/AboutPage/About';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import SearchPage from "./components/Page/SearchPage/SearchPage";
import LandingPage from './components/Page/LandingPage/LandingPage';
import Collections from './components/Page/CollectionsPage/Collections';

import { mapping } from './components/Page/CollectionsPage/mapping';
import CollectionCard from './components/common/CollectionCard/CollectionCard';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/top30" element={<Top30 />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/collections" element={<Collections />} />

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
    </BrowserRouter>
  );
}

export default App;
