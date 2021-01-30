import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

//Notre createStore va nouos permettre de stocker notre/nos reducer(s)

export default createStore(
  combineReducers({
    todos: todoReducer,
    filter: (state = 0, action) => state,
  }),
  // combienReducers permet de stocker plusieurs reducers dans le store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // Le second paramètre passé dans le creacteStore est un middleware qui va nous permettre
  // de consulter les états de nos éléments via la console du navigateur (l'ajout de l'extension "Redux dev tool"
  // est nécessaire => voir le README sur github : https://github.com/zalmoxisus/redux-devtools-extension#installation)
);
