import { ContactsList } from "../ContactsList/ContactsList";
import { useState, useEffect, useRef } from "react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import "./Contacts.css";

export function Contacts({ contactsList }) {
  const [contacts, setContacts] = useState(contactsList);
  const [contactShown, setContactShown] = useState(null);
  const [isContactInfoShown, setIsContactInfoShown] = useState(false);

  const CONTACT_INFO_REF = useRef();

  const CONTACT_INFO_CLASS = ".contact-info";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(CONTACT_INFO_CLASS)) {
        setIsContactInfoShown(false);
        setContactShown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [CONTACT_INFO_REF]);

  const updateContactInfo = (firstName, lastName, number, oldContact) => {
    let contactToUpdate = contacts.find(
      (contact) => contact.Number === oldContact.Number
    );
    contactToUpdate.FirstName = firstName;
    contactToUpdate.LastName = lastName;
    contactToUpdate.Number = number;
  };

  const openNewContactInfo = () => {
    setIsContactInfoShown(true);
  };

  const addNewContact = (firstName, lastName, number) => {
    let newContact = {
      FirstName: firstName,
      LastName: lastName,
      Number: number,
    };
    contacts.push(newContact);
  };

  return (
    <div>
      <div className="contacts">
        <button className="add-new-contact" onClick={openNewContactInfo}>
          +
        </button>
        <ContactsList
          contacts={contacts}
          setContacts={setContacts}
          setIsContactInfoShown={setIsContactInfoShown}
          setContactShown={setContactShown}
        />
      </div>
      {isContactInfoShown && (
        <ContactInfo
          ref={CONTACT_INFO_REF}
          contact={contactShown}
          setIsContactInfoShown={setIsContactInfoShown}
          updateContactInfo={contactShown ? updateContactInfo : addNewContact}
          setContactShown={setContactShown}
        />
      )}
    </div>
  );
}
