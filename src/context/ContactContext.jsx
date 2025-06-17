// src/context/ContactContext.jsx
import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (email) => {
    setContacts((prev) => prev.filter((contact) => contact.email !== email));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
