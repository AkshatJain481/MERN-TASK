import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PostSectionNavbar from "./components/PostSectionNavbar";
import Content from "./components/Content";
import MobileNavbar from "./components/MobileNavbar";
import MobileCreatePostButton from "./components/MobileCreatePostButton";
import SignUp from "./components/sub_components/SignUp";
function App() {
  return (
    <div className="pb-16">
     <Navbar />
     <MobileCreatePostButton />
     <MobileNavbar />
     <HeroSection />
     
     <PostSectionNavbar />
     
     <Content />
     
     
    </div>
  );
}

export default App;
