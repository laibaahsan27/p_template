import React from "react";
import "./Last.css";
import flower from "../../images/slider thing.png";

const Last = () => {
  const items = [
    "Full Stack Development",
    "Web Applications",
    "App Development",
    "Software Architecture",
    "Open Source Contributions",
    "Machine learning",
  ];

  const list = [
    {
      id: 1,
      first: "Open Source Contributor ",
      second: "@TechHub Community",
      third: "January 2023 – Present",
      fourth:
        "Taking an active role in contributing to open-source projects, collaborating with developers worldwide to create impactful software solutions.",
    },
    {
      id: 2,
      first: "Tech Lead",
      second: "@IIT Hyderabad Coding Club",
      third: "August 2022 – Present",
      fourth:
        ": Leading the Coding Club in organizing coding competitions, workshops, and hackathons, fostering a vibrant coding community on campus",
    },
  ];

  return (
    <div>
      <div className="head">
        LEADERSHIP ROLES<span className="respon">and responsibilities</span>
      </div>
      {list.map((list) => {
        return (
          <div className="outer" key={list.id}>
            <div className="hashDiv">
              <span className="id">#{list.id}</span>
            </div>

            <div className="rest">
              <div>
                <span className="first">{list.first} </span>
                <span className="second">
                  {list.second} <br />{" "}
                </span>
              </div>
              <div>
                <span className="third">
                  {list.third} <br />{" "}
                </span>
              </div>
              <div>
                <span className="fourth">{list.fourth}</span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="containerL">
        <div className="black-bar"></div>
        <div className="marquee">
          <div className="marquee__inner">
            {items.concat(items).map((item, i) => (
              <React.Fragment key={i}>
                <div className="marquee__item">{item}</div>
                <img src={flower} alt="" className="marquee__image" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
