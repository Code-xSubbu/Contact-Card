import { useState, useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    addContact(formData);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
