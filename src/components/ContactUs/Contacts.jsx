import {
  ContactIcon,
  ContactItem,
  ContactType,
  ContactWrap,
  SocialIcon,
} from "./Contacts.styled";
import icon from "../../images/sprite.svg";

const Contacts = () => {
  return (
    <ContactWrap>
      <ul>
        <li>
          <ContactType>Phone:</ContactType>
        </li>
        <li>
          <ContactItem href="tel:+380981234567">
            <ContactIcon width={24} height={24}>
              <use href={`${icon}#icon-call`}></use>
            </ContactIcon>
            +38 (098) 12 34 567
          </ContactItem>
        </li>
        <li>
          <ContactItem href="tel:+380931234567">
            <ContactIcon width={24} height={24}>
              <use href={`${icon}#icon-call`}></use>
            </ContactIcon>
            +38 (093) 12 34 567
          </ContactItem>
        </li>
      </ul>
      <div>
        <ContactType>E-mail:</ContactType>
        <ContactItem href="mailto:office@ecosolution.com">
          <ContactIcon width={24} height={24}>
            <use href={`${icon}#icon-sms`}></use>
          </ContactIcon>
          office@ecosolution.com
        </ContactItem>
      </div>
      <div>
        <ContactType>Address:</ContactType>
        <ContactItem
          href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <ContactIcon width={24} height={24}>
            <use href={`${icon}#icon-map`}></use>
          </ContactIcon>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactItem>
      </div>
      <div>
        <ContactType>Social Networks:</ContactType>
        <a
          href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <SocialIcon width={24} height={24}>
            <use href={`${icon}#icon-facebook`}></use>
          </SocialIcon>
        </a>
        <a
          href="https://maps.app.goo.gl/jUpySPTpGMgWA1WR6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <SocialIcon width={24} height={24}>
            <use href={`${icon}#icon-instagram`}></use>
          </SocialIcon>
        </a>
      </div>
    </ContactWrap>
  );
};

export default Contacts;
