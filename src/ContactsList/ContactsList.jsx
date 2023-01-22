import { Contact } from "../Contact/Contact";
import "./ContactsList.css";

export function ContactsList({
  contacts,
  setContacts,
  setIsContactInfoShown,
  setContactShown,
}) {
  const onContactClicked = (contact) => {
    setIsContactInfoShown(true);
    setContactShown(contact);
  };

  const deleteContact = (event, contactToDelete) => {
    setContacts(
      contacts.filter((contact) => contact.Number !== contactToDelete.Number)
    );
    event.stopPropagation();
  };

  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.Number}
          contact={contact}
          onContactClicked={() => onContactClicked(contact)}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}
