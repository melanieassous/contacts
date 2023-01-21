import "./Contact.css";

export function Contact({ contact, onContactClicked, deleteContact }) {
  return (
    <div className="contact" onClick={onContactClicked}>
      <div>
        <span className="first-name">{contact && contact.FirstName}</span>
        <span className="last-name">{contact && contact.LastName}</span>
        <span
          className="delete-contact"
          onClick={(e) => deleteContact(e, contact)}
        >
          X
        </span>
      </div>
      <span className="number">{contact && contact.Number}</span>
    </div>
  );
}
