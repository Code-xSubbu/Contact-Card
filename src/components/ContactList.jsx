import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import Card from "./card";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="list">
      {contacts.map((contact, index) => (
        <Card key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
