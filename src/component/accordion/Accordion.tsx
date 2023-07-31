import { useState } from "react";
import { Typography } from "@mui/material";
import AccordionItem from "../accordion-item/AccordionItem";
import { AccordionProps } from "../../types";
const Accordion: React.FC<AccordionProps> = ({ data }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = (): void => {
  //   setIsOpen(pevIsOpen => !pevIsOpen);
  // }
  // const [title, children] = data;
  return (
    <>
      {data.map((item) => {
        <AccordionItem key={item.id} id={item.id} />;
      })}
    </>
  );
};

export default Accordion;
