import React, { useState } from "react";
import "./css/accordion.css";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components/accordion/
 * Controlled Accordion
 */

export default function Accordion({ items }) {
  items = items || items_placeholder;
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <div key={index} className="accordion_item">
        <div
          className={`accordion_header ${isActive}`}
          onClick={() => onTitleClick(index)}
        >
          <h4 className="accordion_title">{item.header}</h4>
          <div className="accordion_icon">{isActive ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</div>
        </div>
        <div className={`accordion_body ${isActive}`}>{item.body}</div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
}

const items_placeholder = [
  {
    header: "Accordion Item 1",
    body: "Content for Accordion Item 1",
  },
  {
    header: "Accordion Item 2",
    body: "Content for Accordion Item 2",
  },
  {
    header: "Accordion Item 3",
    body: "Content for Accordion Item 3",
  },
];
