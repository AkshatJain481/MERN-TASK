import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PostSectionNavbar from "./components/PostSectionNavbar";
import Content from "./components/Content";
import MobileNavbar from "./components/MobileNavbar";
import MobileCreatePostButton from "./components/MobileCreatePostButton";
import SignUp from "./components/sub_components/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <div className="pb-16">
      <ToastContainer />
     <Navbar />
     <MobileCreatePostButton />
     <MobileNavbar />
     <HeroSection />
     
     <PostSectionNavbar />
     
     <Content />
     
     
    </div>
  );
}

export default Home;
