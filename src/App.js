import "./App.css";
import { ContactsList } from "./ContactsList/ContactsList";
import { CONTACTS } from "./Contacts";

function App() {
  return (
    <div className="App">
      <ContactsList contactsList={CONTACTS} />
    </div>
  );
}

export default App;
