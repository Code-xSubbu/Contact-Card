import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
const Card = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div className="card">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <button onClick={() => deleteContact(contact.email)}>Delete</button>
    </div>
  );
};

export default Card;
