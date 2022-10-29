import React from "react";
import "./about.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutHeading">About Me</div>
        <div className="aboutContent">
          <motion.div
            className="myImg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
          >
            <img src="/images/yash.jpg" alt="" />
          </motion.div>
          <motion.div
            className="myDesc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
          >
            <div className="desc1">
              {" "}
              My name is Yash Panchiwala. I'm an Btech student at PDEU Computer
              Science Department. I was born in Deesa and raised in Ahmedabad.I
              had did my HSC and SSC from Gujarat Board.
            </div>
            <div className="desc2">
              My area of interest are Web Development, Data Structure, UI/UX
              Design and Data Science. I love working withgreat people,
              inspiring others, and being inspired.
            </div>
            <div className="desc3">
              I like to travel alot. I believe travelling gives you a new
              perspective to everything and also Relieves Stress. We meet new
              people, see more places, enjoy more cultures and view many
              beautiful sceneries.
            </div>
          </motion.div>
        </div>
        <motion.div
          className="soc-link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Panchiwalayash" className="link">
            <img src="/images/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-panchiwala"
            className="link"
          >
            <img src="/images/linkedin.png" alt="" />
          </a>
          <a
            href="https://drive.google.com/file/d/1z47sgNVLu-DOc7zt0nry7bZ-aisSnG3B/view?usp=sharing"
            className="resumeBtn"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};
