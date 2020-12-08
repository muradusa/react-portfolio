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
    <div className="experience">
      <div className="experience__header">
        <span style={{ color: "green", fontSize: "25px" }}>02.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          Experience
        </h1>
        <span className="titleLine"></span>
      </div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="title">Job # 1</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3>Freelance Developer</h3>
            <p>January - April 2018</p>
            <ul>
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
            <AccordionItemButton className="title">Job # 2</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3>Freelance Developer</h3>
            <p>January - April 2018</p>
            <ul>
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
            <AccordionItemButton className="title">Job # 3</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3>Freelance Developer</h3>
            <p>January - April 2018</p>
            <ul>
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
            <AccordionItemButton className="title">Job # 4</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="panel">
            <h3>Freelance Developer</h3>
            <p>January - April 2018</p>
            <ul>
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
      </Accordion>
      );
    </div>
  );
}

export default Experience;
