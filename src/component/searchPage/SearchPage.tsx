import { useState, ChangeEvent, useEffect } from "react";
import { TextField, Container } from "@mui/material";
import Accordion from "../accordion/Accordion";
import { AccordionProps, IData } from "../../types";
const SearchPage: React.FC<AccordionProps> = ({ data }) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [newData, setNewData] = useState<IData[]>([]);

  useEffect(() => {
    filterData(searchItem);
    console.log(searchItem);
  }, [searchItem]);

  const findMatches = (data: IData[], searchItem: string): IData[] => {
    const matches: IData[] = [];

    const traverse = (
      items: IData[],
      searchValue: string,
      parents: IData[]
    ) => {
      for (const item of items) {
        const title = item.title.toLowerCase();
        if (title.includes(searchValue.toLowerCase())) {
          matches.push({ ...item, children: [] });
          parents.forEach((parent) => {
            matches.push({ ...parent, children: [] });
          });
          return;
        }
        if (item.children.length > 0) {
          traverse(item.children, searchValue, [...parents, item]);
        }
      }
    };

    traverse(data, searchItem, []);

    return matches;
  };

  const filterData = (searchItem: string): void => {
    if (searchItem.trim() === "" || searchItem.length < 1) {
      setNewData([]);
    } else {
      const filtered = findMatches(data, searchItem);
      setNewData(filtered);
    }
  };

  const handleSearchItemChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchItem(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ border: "2px solid #B0C4DE", padding: 2, borderRadius: "10px" }}
    >
      <TextField
        id="outlined-search"
        label="Поиск..."
        type="search"
        value={searchItem}
        onChange={handleSearchItemChange}
        sx={{ width: "100%" }}
      />
      <Accordion data={newData.length > 0 ? newData : data} />
    </Container>
  );
};

export default SearchPage;
