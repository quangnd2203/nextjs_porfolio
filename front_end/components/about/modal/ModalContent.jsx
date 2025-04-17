import React from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Personal Info</h3>
          <PersonalInfo />
          <div className="edina_tm_button">
            <a href="https://drive.google.com/file/d/1nqE4ZK84splNHy2v0d9cygFUs2UiYu_R/view?usp=sharing" target="_blank"
              rel="noopener noreferrer" className="color">
              Download CV
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}

        <div className="col-6 achievements-wrapper">
          <h3>Achievements</h3>
          <Achievements />
        </div>
        {/* End  Achievements */}
      </div>
      {/* End .row */}

      <div className="row resume-box">
        <div className="col-6">
          <h3>Experience</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        <div className="col-6">
          <h3>Education</h3>
          <Education />
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
