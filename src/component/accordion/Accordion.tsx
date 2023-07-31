import { useState } from "react";
import { List } from "@mui/material";
import AccordionItem from "../accordion-item/AccordionItem";
import { AccordionProps, IData } from "../../types";

interface IsOpenItems {
  [key: number]: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [isOpenItems, setIsOpenItems] = useState<IsOpenItems>({});

  const toggle = (itemId: number): void => {
    setIsOpenItems((prevIsOpenItems) => ({
      ...prevIsOpenItems,
      [itemId]: !prevIsOpenItems[itemId],
    }));
  };

  const renderAccordionItems: React.FC<IData[]> = (accordionItem) => {
    if (!accordionItem || accordionItem.length === 0) return null;

    return (
      <List component="div" disablePadding>
        {accordionItem.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            toggle={() => toggle(item.id)}
            isOpen={isOpenItems[item.id]}
            renderAccordionItems={() => renderAccordionItems(item.children)}
          />
        ))}
      </List>
    );
  };

  return <main>{renderAccordionItems(data)}</main>;
};

export default Accordion;
