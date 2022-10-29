import React from "react";
import "./project.css";
import { projectsData } from "../../data";
import { ProjectComponent } from "../ProjectComponent/ProjectComponent/ProjectComponent";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="project" id="project">
      <div className="projectContainer">
        <div className="title">Projects</div>
        <motion.div
          className="desc"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
          }}
        >
          Here are my personal projects.
        </motion.div>
        <div className="desc">
          Click on the card to see source code on Github.
        </div>
        <div className="project-section">
          {projectsData.map((item) => (
            <ProjectComponent project={item} key={item.id} />
          ))}
        </div>
        <div className="projectBottom">
          <div className="project-bottom-head">Visit my projects on Github</div>
          <motion.a
            href="https://github.com/Panchiwalayash"
            className="project-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
            }}
          >
            <img src="/images/github.png" alt="" />
            <span>Github</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};
