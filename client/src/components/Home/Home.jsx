import React from "react";
import "./home.css";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <img src="/images/home.jpg" alt="" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
          }}
          className="container"
        >
          <div className="head">Hi i am Yash Panchiwala</div>
          <div className="content">
            I am a computer science student passionate about coding and design.
          </div>
        </motion.div>
        <motion.a
          initial="closed"
          animate="open"
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100vw" },
          }}
          className="projectBtn"
          href="#project"
        >
          My Work
        </motion.a>
      </div>
    </>
  );
};
