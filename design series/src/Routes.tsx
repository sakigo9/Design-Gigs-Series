import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/mainLayout";
const DesignRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}/>
            </Routes>
        </Router>
    )
}

export default DesignRoutes;