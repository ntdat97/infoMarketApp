import {action, createStore} from 'easy-peasy';
export const store = createStore({
  text: 5,
  setText: action((state, payload) => {
    state.text = payload;
  }),
  isLogged: false,
  setIsLogged: action((state, payload) => {
    state.isLogged = payload;
  }),
});
