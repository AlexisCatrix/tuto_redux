import React from "react";
import { Provider } from "react-redux";
// Le provider va nous permettre de récupérer les élements stocker dans le store
import store from "./store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
