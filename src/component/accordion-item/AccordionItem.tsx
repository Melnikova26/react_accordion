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
    <div style={{ paddingLeft: "20px" }}>
      <ListItemButton
        component="div"
        sx={{
          width: "100%",
          borderBottom: "1px solid #C0C0C0",
        }}
        onClick={() => toggle()}
      >
        <ListItemIcon>
          {!isOpen ? <ChevronRightIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      {isOpen && renderAccordionItems()}
    </div>
  );
};
export default AccordionItem;
