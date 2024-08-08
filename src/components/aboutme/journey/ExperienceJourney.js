import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023-2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Industrial World
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
             work Experience
          </h6>
          <p>• BARC (Bhabha Atomic Research Center),During my internship at BARC,successfully executed a project involving the designing and development of a “Radiation monitoring system based on embedded systems”  I actively engaged in diverse research initiatives.
Collaborating closely with seasoned professional Scientiests, I contributed to various projects
aimed at advancing knowledge in the field. My responsibilities included Research & Development data
analysis, literature reviews, and assisting in experimental procedures. it enhanced
my ability to work effectively within a dynamic research environment, fostering both
personal and professional growth.</p>
          <p>• TCS (Tata Consultancy Service) -Tata Cybersecurity Security Analyst Job Simulation on Forage - January 2024
Completed a job simulation involving identity and access management (IAM) for
Acquired expertise in IAM principles, cybersecurity best practices, and strategic
alignment with business objectives. Delivered comprehensive documentation and
presentations, showcasing the ability to communicate complex technical concepts
effectively.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            work Experience
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Management and Information System
          </h6>
          <p>
• Javak Microcircuits.Pvt.Lmt-During my internship at Javak Microcircuits PCB, I held the position of Exploratory Data Analyst for car features. Within this role, I actively participated in hands-on PCB manufacturing, demonstrating precision in the assembly and testing of electronic components. I consistently upheld quality standards throughout the production process, gaining valuable practical skills and experience. Additionally, I contributed to the exploration and analysis of data related to car features, providing insights and recommendations for enhancement. This experience has fortified my proficiency in both technical and analytical domains, enriching my capabilities for future endeavors in the field of PCB design and data analysis.</p>
          
          <p>• Preparing applications for admission into different Institute.</p>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
