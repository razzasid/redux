import { createStore } from "redux";
import { myCreateStore } from "./my-redux";
const postCountElement = document.querySelector(".post-count");
// let state = {
//   count: 0,
//   name: "Raza",
//   age: 25,
// };

// let prevState = state;

function increament() {
  // ** Mutating state ** //
  //   state.count = state.count + 1;
  // ** Not mutating State ** //
  // state = { ...state, count: state.count + 1 };
}

// increament();
// console.log(state);
// increament();
// console.log(state);
// increament();
// console.log(state);

let initialState = {
  post: 0,
  name: "Raza Siddique",
  age: 26,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };

    case DECREMENT:
      return { ...state, post: state.post - 1 };

    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };

    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const myStore = myCreateStore(reducer);
// console.log(store);

const unsubscribe1 = myStore.subscribe(() => {
  console.log(myStore.getState());
  postCountElement.innerText = myStore.getState().post;
});

postCountElement.innerText = myStore.getState().post;

myStore.dispatch({ type: INCREASE_BY, payload: 10 });
myStore.dispatch({ type: INCREMENT });
myStore.dispatch({ type: INCREMENT });
unsubscribe1();
myStore.dispatch({ type: INCREMENT });
myStore.dispatch({ type: DECREMENT });

postCountElement.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});

// what redux will do
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// console.log(reduxState);
