import "./App.css";
import { CONTACTS } from "./Contacts";
import { Contacts } from "./Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Contacts contacts={CONTACTS} />
    </div>
  );
}

export default App;
