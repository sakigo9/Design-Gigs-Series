import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout";
import FirstEpisode from "./containers/firstEpisode/FirstEpisode";
import Home from "./containers/home/Home";
import SecondEpisode from "./containers/secondEpisode";
const DesignRoutes = () => {
  return (
    <Router>
      <MainLayout
        leftWidth={"12vw"}
        rightWidth={"85vw"}
        sideBarSection={<div>Left</div>}
        mainBodySection={<div>Right</div>}
      >
        <Routes>
          <Route path="/" element={<Home right={"85vw"}/>} />
          <Route path="/episode1" element={<FirstEpisode firstWidth="85vw"/>} />
          <Route path="/episode2" element={<SecondEpisode secondWidth="85vw"/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default DesignRoutes;
