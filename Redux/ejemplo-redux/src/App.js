import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./store/reducers/todo-reducer";
import ListaTodosClases from "./components/organisms/ListaTodosClases";
import { ListaTodosFunciones } from "./components/organisms/ListaTodosFunciones";

const store = createStore(
  combineReducers({ todoReducer }),
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <ListaTodosClases />
      <ListaTodosFunciones />
    </Provider>
  );
}

export default App;
