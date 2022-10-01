import "./App.css";
import { ListaTodos } from "./components/organisms/ListaTodos";
import { TodosContextProvider } from "./contexts/use-todos";

function App() {
  return (
    <TodosContextProvider>
      <ListaTodos />
    </TodosContextProvider>
  );
}

export default App;
