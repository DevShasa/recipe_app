import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import RecepieDetail from "./RecepieDetail";
import { AnimatePresence } from "framer-motion";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence
            exitBeforeEnter
        >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/cuisine/:type" element = {<Cuisine />} />
                <Route path="/search/:searchterm" element = {<SearchResults />}/>
                <Route path="/recepie/:id" element={<RecepieDetail/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages