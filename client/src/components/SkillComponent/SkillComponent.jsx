import React, { useState } from "react";
import "./skillcomponent.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const SkillComponent = ({ skill }) => {
  const id = skill.id % 2;
  const [left, setLeft] = useState(true);

  useEffect(() => {
    if (id === 0) setLeft(true);
    else setLeft(false);
  }, [skill]);
  return left ? (
    <motion.div
      className="skill-component"
      initial={{ opacity: 0, x: "100vw" }}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      viewport={{ once: true }}
    >
      <div className="skill-img">
        <img src={skill.img} alt="" />
      </div>
      <div className="skill-name">{skill.name}</div>
    </motion.div>
  ) : (
    <motion.div
      className="skill-component"
      initial={{ opacity: 0, x: "-100vw" }}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      viewport={{ once: true }}
    >
      <div className="skill-img">
        <img src={skill.img} alt="" />
      </div>
      <div className="skill-name">{skill.name}</div>
    </motion.div>
  );
};
