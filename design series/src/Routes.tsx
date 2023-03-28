import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout";
import SideBar from "./components/sideBar";
const DesignRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout leftWidth={0} rightWidth={0} sideBarSection={<div>Left</div>} mainBodySection={<div>Right</div>}/>}/>
                <Route path="/side" element={<SideBar/>}/>
            </Routes>
        </Router>
    )
}

export default DesignRoutes;