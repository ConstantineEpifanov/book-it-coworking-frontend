import { contactsItems } from "../../config/contactsItems";
import { ContactsItem } from "../ContactsItem/ContactsItem";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import teamImg from "../../images/team_photo.png";
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
        Наша команда — это группа амбициозных профессионалов, преданная идее
        поддержки IT-специалистов. Мы создали эту сеть коворкингов, чтобы
        предоставить им оптимальную среду для творчества и роста. Мы постоянно
        работаем над улучшением наших пространств, чтобы обеспечить высокий
        уровень комфорта и возможностей для инноваций. Наша цель — сделать
        работу для айтишников более продуктивной и вдохновляющей.
      </p>
    </div>
  </section>
);

export default Contacts;
