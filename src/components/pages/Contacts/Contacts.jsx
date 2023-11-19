import { contactsItems } from "../../../config/contactsItems";
import { ContactsItem } from "../../ContactsItem/ContactsItem";
import { SectionTitle } from "../../SectionTitle/SectionTitle";
import teamImg from "../../../images/team_photo.jpg";
import "./Contacts.scss";

const Contacts = () => (
  <section className="contacts" aria-label="страница контактов компании">
    <SectionTitle titleText="Контакты" />
    <ul className="contacts__list">
      {contactsItems.map((data) => (
        <ContactsItem
          key={data.id}
          info={data.info}
          header={data.header}
          img={data.img}
        />
      ))}
    </ul>
    <div className="contacts__overlay" />
    <div className="contacts__team">
      <img
        className="contacts__team_img"
        src={teamImg}
        alt="фотография команды"
      />
      <h3 className="contacts__team_header">Наша команда</h3>
      <p className="contacts__team_info">
        Наша команда&#160;&#8212; это группа амбициозных профессионалов,
        преданная идее поддержки IT-специалистов. Мы&#160;создали эту сеть
        коворкингов, чтобы предоставить им&#160;оптимальную среду для творчества
        и&#160;роста. Мы&#160;постоянно работаем над улучшением наших
        пространств, чтобы обеспечить высокий уровень комфорта
        и&#160;возможностей для инноваций. Наша цель&#160;&#8212; сделать работу
        для айтишников более продуктивной и&#160;вдохновляющей.
      </p>
    </div>
  </section>
);

export default Contacts;
