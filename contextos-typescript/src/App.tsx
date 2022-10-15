import { TodosContextProvider } from "./contexts/use-todos";
import { Routes } from "./routes";
import "./styles/global.scss";

function App() {
  return (
    <TodosContextProvider>
      <Routes />
    </TodosContextProvider>
  );
}

export default App;
