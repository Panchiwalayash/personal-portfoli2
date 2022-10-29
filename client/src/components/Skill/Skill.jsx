import React from "react";
import { SkillComponent } from "../SkillComponent/SkillComponent";
import "./skill.css";
import { skillsData } from "../../data";
import { motion } from "framer-motion";

export const Skill = () => {
  return (
    <div className="skill" id="skill">
      <div className="skillContainer">
        <div className="title">Skills</div>
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
          Here are some of my skills and I am looking forward to learn more.
        </motion.div>
        <div className="skill-section">
          {skillsData.map((item) => (
            <SkillComponent key={item.id} skill={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
