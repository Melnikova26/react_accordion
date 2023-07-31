import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  renderAccordionItems: Function;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  toggle,
  isOpen,
  renderAccordionItems,
}) => {
  return (
    <ListItem
      disablePadding
      divider
      sx={{ flexDirection: "column", alignItems: "flex-start", pl: 2 }}
    >
      <ListItemButton component="div" onClick={() => toggle()}>
        <ListItemIcon>
          {!isOpen ? <ChevronRightIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      {isOpen && renderAccordionItems()}
    </ListItem>
  );
};
export default AccordionItem;
