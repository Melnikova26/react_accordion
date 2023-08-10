import { useState, useEffect, ChangeEvent, Fragment } from "react";
import { List, Container, TextField } from "@mui/material";
import AccordionItem from "../accordion-item/AccordionItem";
import { AccordionProps, IData } from "../../types";

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const searchItem = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const toggle = (id: number, open: number[] = []): void => {
    if (openItems.includes(id)) {
      setOpenItems((prevItem) => prevItem.filter((item) => item !== id));
    } else {
      setOpenItems([...open, id]);
    }
  };

  const findMatchingItem = (
    items: IData[],
    openItems: number[] = []
  ): number[] | null => {
    for (const item of items) {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return [...openItems, item.id];
      }

      const childPath = findMatchingItem(item.children, [
        ...openItems,
        item.id,
      ]);
      if (childPath) {
        return childPath;
      }
    }

    return null;
  };

  useEffect(() => {
    if (!searchQuery) {
      setOpenItems([]);
    } else {
      const matchingItemPath = findMatchingItem(data);
      if (matchingItemPath) {
        setOpenItems(matchingItemPath);
      } else {
        setOpenItems([]);
      }
    }
  }, [searchQuery, data]);

  const highlightText = (text: string, query: string): JSX.Element[] => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "#AFEEEE" }}>
          {part}
        </span>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      )
    );
  };

  const renderAccordionItems: React.FC<IData[]> = (
    accordionItem,
    open: number[] = []
  ) => {
    if (!accordionItem || accordionItem.length === 0) return null;

    return (
      <List component="div" sx={{ width: "100%" }}>
        {accordionItem.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            openItems={openItems}
            toggle={() => toggle(item.id, [...open, item.id])}
            highlight={() => highlightText(item.title, searchQuery)}
            renderAccordionItems={() =>
              renderAccordionItems(item.children, [...open, item.id])
            }
          />
        ))}
      </List>
    );
  };

  return (
    <main>
      <Container
        maxWidth="sm"
        sx={{ border: "2px solid #B0C4DE", padding: 2, borderRadius: "10px" }}
      >
        <TextField
          id="outlined-search"
          label="Поиск..."
          type="search"
          value={searchQuery}
          onChange={searchItem}
          sx={{ width: "100%" }}
        />
        {renderAccordionItems(data)}
      </Container>
    </main>
  );
};

export default Accordion;
