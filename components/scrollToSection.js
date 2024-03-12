import React, { useEffect } from "react";

const ScrollToSection = ({ id }) => {
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth"
        });
      }
    };

    scrollToSection();
  }, [id]);

  return null;
};

export default ScrollToSection;
