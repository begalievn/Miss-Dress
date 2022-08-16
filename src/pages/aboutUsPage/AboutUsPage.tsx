import React, { useEffect } from "react";

import AboutContent from "./components/AboutContent";

import classes from "./aboutPage.module.scss";

const AboutUsPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }, []);

  return (
    <div>
      <AboutContent />
    </div>
  );
};

export default AboutUsPage;
