import "./App.css";
import { CONTACTS } from "./Contacts";
import { Contacts } from "./Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Contacts contactsList={CONTACTS} />
    </div>
  );
}

export default App;
