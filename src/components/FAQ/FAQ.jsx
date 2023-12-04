import { useState } from "react";
import { Link } from "react-scroll";
import { Container } from "../../App.styled";
import AccordionItem from "./AccordionItem";
import icon from "../../images/sprite.svg";
import {
  AccordionList,
  AccordionTitle,
  AccordionWrap,
  LastQuest,
} from "./FAQ.styled";
import { ContactBtn } from "../Buttons/Buttons";
import { IconContact } from "../Header/Header.styled";

const FAQdata = {
  one: {
    ask: "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  two: {
    ask: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  three: {
    ask: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  four: {
    ask: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  five: {
    ask: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
};

const FAQ = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const hendleAccordionClick = (newActiveAccordion) => {
    setCurrentActive(
      newActiveAccordion === currentActive ? null : newActiveAccordion
    );
  };

  return (
    <Container id="faq">
      <AccordionWrap>
        <AccordionTitle>Frequently Asked Questions</AccordionTitle>
        <AccordionList>
          <AccordionItem
            ask={FAQdata.one.ask}
            answer={FAQdata.one.answer}
            isActive={currentActive === 1}
            onClick={() => hendleAccordionClick(1)}
          />
          <AccordionItem
            ask={FAQdata.two.ask}
            answer={FAQdata.two.answer}
            isActive={currentActive === 2}
            onClick={() => hendleAccordionClick(2)}
          />
          <AccordionItem
            ask={FAQdata.three.ask}
            answer={FAQdata.three.answer}
            isActive={currentActive === 3}
            onClick={() => hendleAccordionClick(3)}
          />
          <AccordionItem
            ask={FAQdata.four.ask}
            answer={FAQdata.four.answer}
            isActive={currentActive === 4}
            onClick={() => hendleAccordionClick(4)}
          />
          <AccordionItem
            ask={FAQdata.five.ask}
            answer={FAQdata.five.answer}
            isActive={currentActive === 5}
            onClick={() => hendleAccordionClick(5)}
          />
        </AccordionList>
      </AccordionWrap>
      <LastQuest>Didn't find the answer to your question?</LastQuest>
      <Link to="contact-us" spy={true} smooth={true}>
        <ContactBtn prop={"active"}>
          Contact Us
          <IconContact width={14} height={14}>
            <use href={`${icon}#icon-arrow-down`}></use>
          </IconContact>
        </ContactBtn>
      </Link>
    </Container>
  );
};

export default FAQ;
