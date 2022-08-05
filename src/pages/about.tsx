import React from "react";
import BottomNavbar from "../components/bottom-navbar";
import SearchBar from "../components/search-bar";
function About() {
  return (
    <div className="w-full h-screen bg-blueGray relative flex items-center flex-col">
      <SearchBar/>
      <BottomNavbar />
    </div>
  );
}

export default About;
