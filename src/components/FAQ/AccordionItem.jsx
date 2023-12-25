import {
  AccordionIcon,
  Answer,
  Ask,
  AskWrap,
  Item,
  StrokeOne,
  StrokeTwo,
} from "./AccordionItem.styled";

const AccordionItem = ({ ask, answer, isActive, onClick }) => {
  return (
    <Item onClick={onClick}>
      <AskWrap>
        <AccordionIcon>
          <StrokeOne $active={isActive ? "true" : null} />
          <StrokeTwo $active={isActive ? "true" : null} />
        </AccordionIcon>
        <Ask>{ask}</Ask>
      </AskWrap>
      <Answer $active={isActive ? "true" : null}>{answer}</Answer>
    </Item>
  );
};

export default AccordionItem;
