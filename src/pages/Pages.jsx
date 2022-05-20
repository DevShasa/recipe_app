import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import RecepieDetail from "./RecepieDetail";

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cuisine/:type" element = {<Cuisine />} />
            <Route path="/search/:searchterm" element = {<SearchResults />}/>
            <Route path="/recepie/:id" element={<RecepieDetail/>} />
        </Routes>
    )
}

export default Pages