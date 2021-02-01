import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "./Experience.css";

function Experience() {
  return (
    <div className="main__experience">
      <div className="experience" id="experience">
        <div className="experience__header">
          {/* <span style={{ color: "royalblue", fontSize: "25px" }}>02.</span> */}
          <h1 style={{ paddingRight: "15px" }}>Experience</h1>
          <span className="titleLine"></span>
        </div>
        <Accordion className="accordion">
          {/* <div className="work"> */}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="title">
                Project Engineer
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <h3 className="company">W.E. Lyons Construction</h3>
              <p className="date">March 2019 - Present</p>
              <ul className="experience__item">
                <li>
                  Successfully provided Project Manager with engineering and
                  administrative support for successful completion of the
                  project 2 month ahead of schedule, potentially saving our
                  company and client $1.4M.
                </li>
                <li>
                  Built a reputation as a go-to resource among coworkers for
                  tech and various engineering questions.
                </li>
                <li>
                  Proactively designed and developed a new & modern website for
                  our company.
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="title">
                Wordpress Developer
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <h3 className="company">TMCraft LLC</h3>
              <p className="date">Oct 2015 - Dec 2018</p>
              <ul className="experience__item">
                <li>
                  Participated in the full development lifecycle of 17 websites,
                  working closely with the design team to develop pixel perfect
                  interfaces using WordPress with Elementor.
                </li>
                <li>
                  Outperformed colleagues by implementing a customer-first
                  mindset and an interest in talking with customers to ensure
                  what we are building meets their needs.
                </li>
                <li>
                  Demonstrated leadership by mentoring junior devs, accelerating
                  their development by 30%.
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="title">
                MWD Engineer
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              <h3 className="company">Halliburton Energy Services</h3>
              <p className="date">Jan 2012 - July 2014</p>
              <ul className="experience__item">
                <li>
                  Successfully finished junior engineer training program 7
                  months ahead of projected schedule by independently leading
                  jobs.
                </li>
                <li>
                  Trained and mentored 4 newly hired engineers, who went on to
                  become successful field engineers.
                </li>
                <li>Four times winner of employee of the month award.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Experience;
