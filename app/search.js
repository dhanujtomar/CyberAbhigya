import React from "react";
import "./search.css";
import SearchBar from "./Components/SearchBar";
import CyberData from "./Cyber.json";

function App() {
    return (
        <div className="search" >
            <SearchBar placeholder="Enter cyber info..." data={CyberData} />
        </div>
    );
}

export default App;