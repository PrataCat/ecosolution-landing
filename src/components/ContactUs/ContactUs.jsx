import { Container } from "../../App.styled";
import ContactForm from "./ContactForm";
import { ContactTitle, ContactUsWrap } from "./ContactUs.styled";
import Contacts from "./Contacts";

const ContactUs = () => {
  return (
    <Container id="contact-us">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactUsWrap>
        <Contacts /> <ContactForm />
      </ContactUsWrap>
    </Container>
  );
};

export default ContactUs;
