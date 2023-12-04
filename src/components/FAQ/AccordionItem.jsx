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
    <Item active={isActive ? "true" : null} onClick={onClick}>
      <AccordionIcon active={isActive ? "true" : null}>
        <StrokeOne active={isActive ? "true" : null}></StrokeOne>
        <StrokeTwo></StrokeTwo>
      </AccordionIcon>
      <Ask>{ask}</Ask>
      <Answer active={isActive ? "true" : null}>{answer}</Answer>
    </Item>
  );
};

export default AccordionItem;
