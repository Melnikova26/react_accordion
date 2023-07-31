export interface IData {
  id: number;
  title: string;
  children: IData[];
}
export interface AccordionProps {
  data: IData[];
}
