import React from "react";
import { useState, useEffect } from "react";
import "./projectcomponent.css";
import { motion } from "framer-motion";

export const ProjectComponent = ({ project }) => {
  const id = project.id % 2;
  const [left, setLeft] = useState(true);

  useEffect(() => {
    if (id === 0) setLeft(true);
    else setLeft(false);
  }, [project]);
  const [expand, setExpand] = useState(false);
  return left ? (
    <motion.a
      className="hyperlink"
      href={project.link}
      initial={{ opacity: 0, x: "100vw" }}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      viewport={{ once: true }}
    >
      <div
        className={"project-component " + (expand ? "active" : "")}
        onMouseEnter={() => {
          setExpand(true);
        }}
        onMouseLeave={() => {
          setExpand(false);
        }}
        key={project.id}
      >
        <div className="project-img">
          <img className="img1" src={project.img} alt="" />
        </div>
        <div className="com-title">{project.title}</div>
        <div className="com-desc">{project.desc1}</div>
        <div className="com-desc">{project.desc2}</div>
        <div className="com-desc">{project.desc3}</div>
      </div>
    </motion.a>
  ) : (
    <motion.a
      className="hyperlink"
      href={project.link}
      initial={{ opacity: 0, x: "-100vw" }}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      viewport={{ once: true }}
    >
      <div
        className={"project-component " + (expand ? "active" : "")}
        onMouseEnter={() => {
          setExpand(true);
        }}
        onMouseLeave={() => {
          setExpand(false);
        }}
        key={project.id}
      >
        <div className="project-img">
          <img className="img1" src={project.img} alt="" />
        </div>
        <div className="com-title">{project.title}</div>
        <div className="com-desc">{project.desc1}</div>
        <div className="com-desc">{project.desc2}</div>
        <div className="com-desc">{project.desc3}</div>
      </div>
    </motion.a>
  );
};
