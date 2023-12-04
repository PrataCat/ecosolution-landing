import {
  AccordionIcon,
  Answer,
  Ask,
  Item,
  StrokeOne,
  StrokeTwo,
} from "./AccordionItem.styled";

const AccordionItem = ({ ask, answer, isActive, onClick }) => {
  return (
    <Item active={isActive ? true : false} onClick={onClick}>
      <AccordionIcon active={isActive ? true : false}>
        <StrokeOne active={isActive ? true : false}></StrokeOne>
        <StrokeTwo></StrokeTwo>
      </AccordionIcon>
      <Ask>{ask}</Ask>
      <Answer active={isActive ? true : false}>{answer}</Answer>
    </Item>
  );
};

export default AccordionItem;
