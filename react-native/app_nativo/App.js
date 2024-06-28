import React from "react";
import container from "./navegacao/LugaresNavigator";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import lugaresReducer from "./store/lugares-reducer";

export default function App() {
  return (
    <Provider store={store}>
    {container}
    </Provider>
  )
}

const rootReducer = combineReducers({
  lugares: lugaresReducer
})

//criando o estado centralizado
const store = createStore(rootReducer, applyMiddleware(thunk))