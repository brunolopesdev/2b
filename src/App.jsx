import { Main } from "./components/Main";
import { DataContextProvider } from "./context/DataContext";
import "./styles/globals.scss";

function App() {
  return (
    <DataContextProvider>
      <Main />
    </DataContextProvider>
  );
}

export default App;
