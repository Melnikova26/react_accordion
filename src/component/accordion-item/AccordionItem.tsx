import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IData } from "../../types";
interface AccordionItemProps {
  item: IData;
  openItems: number[];
  toggle: Function;
  highlight: Function;
  renderAccordionItems: Function;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  renderAccordionItems,
  openItems,
  toggle,
  highlight,
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
          {!openItems.includes(item.id) ? (
            <ChevronRightIcon />
          ) : (
            <ExpandMoreIcon />
          )}
        </ListItemIcon>
        <ListItemText primary={highlight()} />
      </ListItemButton>
      {openItems.includes(item.id) &&
        renderAccordionItems(item.children, [...openItems, item.id])}
    </div>
  );
};
export default AccordionItem;
