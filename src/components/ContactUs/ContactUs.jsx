import { Container } from "../../App.styled";
import { ContactTitle, ContactUsWrap } from "./ContactUs.styled";
import Contacts from "./Contacts";

const ContactUs = () => {
  return (
    <Container id="contact-us">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactUsWrap>
        <Contacts />
      </ContactUsWrap>
    </Container>
  );
};

export default ContactUs;
