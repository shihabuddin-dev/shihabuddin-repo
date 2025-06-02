import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade>
      <div className="text-center my-6">
        <div className="flex justify-between flex-col sm:flex-row items-center">
          <div className="flex gap-4">
            <h2>Thanks</h2>
            <h2>شكرًا</h2>
            <h2>ধন্যবাদ</h2>
          </div>
          <h3>
            from <span className="text-lg font-bold">Shihab Uddin</span>
          </h3>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
