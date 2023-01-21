import "./App.css";
import { ContactsList } from "./ContactsList/ContactsList";

let contacts = [
  {
    FirstName: "Liam",
    LastName: "Bublil",
    Number: "0525555555",
  },
  {
    FirstName: "Daniel",
    LastName: "Bublil",
    Number: "0543044022",
  },
  {
    FirstName: "Brigitte",
    LastName: "Assous",
    Number: "0525846153",
  },
  {
    FirstName: "Melanie",
    LastName: "Bublil",
    Number: "0524446048",
  },
  {
    FirstName: "Stefany",
    LastName: "Amsalem",
    Number: "0685365247",
  },
  {
    FirstName: "Kevin",
    LastName: "Assous",
    Number: "0526210420",
  },
  {
    FirstName: "JP",
    LastName: "Assous",
    Number: "0667929770",
  },
];

function App() {
  return (
    <div className="App">
      <ContactsList contactsList={contacts} />
    </div>
  );
}

export default App;
