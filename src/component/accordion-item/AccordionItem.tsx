import { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItemProps {
  id: number;
  title: string;
  toggle: (id: number) => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChange = (id: number): void => {
    toggle(id);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon onClick={() => toggleChange(id)}>
          {!isOpen ? <ChevronRightIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
export default AccordionItem;
