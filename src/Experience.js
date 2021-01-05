// import React from "react";

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
    <div className="experience" id="experience">
      <div className="experience__header">
        <span style={{ color: "green", fontSize: "25px" }}>02.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          Experience
        </h1>
        <span className="titleLine"></span>
      </div>
      <Accordion className="accordion">
        {/* <div className="work"> */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="title">
              Freelance Developer
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3 className="company">Murad Webdev Inc</h3>
            <p className="date">Jan 2018 - April 2020</p>
            <ul className="experience__item">
              <li>
                Worked with a team of three designers to build a marketing
                website and e-commerce platform for blistabloc, an ambitious
                startup originating from Northeastern
              </li>
              <li>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web
              </li>
              <li>
                Interfaced with clients on a weekly basis, providing
                technological expertise
              </li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="title">
              Project Engineer
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3 className="company">W.E. Lyons Construction</h3>
            <p className="date">Jan 2018 - April 2020</p>
            <ul className="experience__item">
              <li>
                Worked with a team of three designers to build a marketing
                website and e-commerce platform for blistabloc, an ambitious
                startup originating from Northeastern
              </li>
              <li>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web
              </li>
              <li>
                Interfaced with clients on a weekly basis, providing
                technological expertise
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
            <h3 className="company">Halliburton</h3>
            <p className="date">Jan 2018 - April 2020</p>
            <ul className="experience__item">
              <li>
                Worked with a team of three designers to build a marketing
                website and e-commerce platform for blistabloc, an ambitious
                startup originating from Northeastern
              </li>
              <li>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web
              </li>
              <li>
                Interfaced with clients on a weekly basis, providing
                technological expertise
              </li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        {/* </div> */}
      </Accordion>
      );
    </div>
  );
}

export default Experience;
